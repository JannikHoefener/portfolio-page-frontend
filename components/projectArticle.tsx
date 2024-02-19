"use client";
import {
  GetProjectId,
  PROJECT,
  ProjectResponse,
} from "@/types-queries/queryPageProjects";
import { useQuery } from "@apollo/client";
import Linktree from "./linktree";
import TagRenderer from "./basicComponents/tagRenderer";
import DynHeadline, { Heading1 } from "./basicComponents/headline";
import { DynTextSection } from "./basicComponents/textblock";
import { DynLink } from "./basicComponents/linkIcon";
import { ArticleHeaderSection } from "./basicComponents/layoutTemplates";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
} from "@nextui-org/react";
import {
  FaRegCalendarCheck,
  FaRegCalendar,
  FaHourglassEnd,
} from "react-icons/fa6";
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
  const tags = data.project.data.attributes.tags;
  console.log(
    "tagsProjectArt",
    tags /* .data.map((tag)=> console.log(tag.attributes.key)) */
  );
  const HeaderSection = (
    <>
      <ArticleHeaderSection>
        <Card isFooterBlurred radius="lg" className="m-10 border-none ">
          <div className="max-h-[250px] ">
            <img
              /* TODO: Image per api! */
              src="https://media.istockphoto.com/id/1259192924/de/foto/happy-people-dance-im-nachtclub-partykonzert.jpg?s=1024x1024&w=is&k=20&c=rAS1ho5kYWHiezBXYnNABM64mc3GmFGstcbFGNpdGOw="
              alt="TODO here"
              className="w-full bg-cover bg-center "
            />
          </div>
          <CardBody className="content-center  before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large w-auto shadow-small ">
            <Heading1>
              <div className="text-black ">{headerData.title}</div>
            </Heading1>
          </CardBody>
          <CardFooter
            className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100" /* className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10" */
          >
            <div className="flex flex-wrap gap-2 flex centered">
              <FaRegCalendar /> {headerData.createDate}
              {headerData.endDate ? (
                <>
                  <FaRegCalendarCheck />
                  {headerData.endDate}
                </>
              ) : (
                <>
                  <FaHourglassEnd /> {headerData.state}
                </>
              )}
            </div>
            <TagRenderer data={tags} />
          </CardFooter>
        </Card>
        <div className="m-10">
        <p>{headerData.description}</p>
        </div>
      </ArticleHeaderSection>
    </>
  );
  return (
    <>
      {/* Header */}
      {headerData.linktree.data == null ?  (
        HeaderSection
      ) : (
        <div className="flex space-x-4">
          <div className="flex-1">{HeaderSection}</div>
          <Linktree id={headerData.linktree.data.id} />
        </div>
      ) }

      {/* Content Section */}
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
