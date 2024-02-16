"use client";
import {
  GetProjectId,
  PROJECT,
  ProjectResponse,
} from "@/types-queries/queryPageProjects";
import { useQuery } from "@apollo/client";
import Linktree from "./linktree";
import TagRenderer from "./basicComponents/tagRenderer";
import DynHeadline from "./basicComponents/headline";
import { DynTextSection } from "./basicComponents/textblock";
import { DynLink } from "./basicComponents/linkIcon";
type projectProps = {
  id: number;
};

export default function ProjectArticle(props: projectProps) {
  const { loading, error, data } = useQuery<ProjectResponse, GetProjectId>(
    PROJECT,
    { variables: { projectID: props.id } }
  );
  /*   const { loading, error, data } = useQuery<TagsResponse>(GET_TAGS); */
  if (loading || data === undefined)
    return <p>Loading data for projectArticle with propsID: {props.id}</p>;
  if (error) return <p>Error : {error.message}</p>;

  const thisData = data.project.data;
  const headerData = data.project.data.attributes;
  const dynContent = data.project.data.attributes.content;
  console.log("dynContent", dynContent);
  return (
    <>
      {/* Header */}
      <TagRenderer data={headerData.tags} />
      <h1>{headerData.title}</h1>
      <div className="grid grid-cols-2 gap-4 py-8 md:py-10">
        {/* TODO: State can be deleted! but maybe somedata that can be used later */}
        <p>Started: {headerData.createDate}</p>
        {headerData.endDate ? (
          <p>ended:{headerData.endDate}</p>
        ) : (
          <p>still {headerData.state}</p>
        )}
      </div>
      <p>{headerData.description}</p>
      {/* Content Section */}
      {/* {headerData.linktree ? null : ( */}
      <Linktree id={headerData.linktree.data.id} />
      {/* )}{" "} */}
      {/* error here? Still works?! TODO! */}
      {/* TODO: ...Dyn-Article-Data... */}
      {dynContent.map((component, index) => (
        <div key={index}>
          {/* Render components based on their typename and order */}
          {component.__typename === "ComponentComponentsHeadline" && (
            <>{<DynHeadline props={component} />}</>
          )}
          {component.__typename === "ComponentComponentsTextSection" && (
            <>{<DynTextSection props={component} />}</>
          )}
          {component.__typename === "ComponentComponentsCreateLink" && (
            <>{<DynLink props={component} />}</>
          )}
          {/* TODO:ComponentComponentsAlbum! */}
          {component.__typename === "ComponentComponentsAlbum" && (
            <>{/* {<LinkBlock props={component}  />} */}</>
          )}
        </div>
      ))}
    </>
  );
}
