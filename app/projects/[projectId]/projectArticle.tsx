"use client";
import { formatDateToYM } from "@/config/dateMachine";
import {
  GetProjectId,
  PROJECT,
  ProjectResponse,
} from "@/types-queries/queryPageProjects";
import { useQuery } from "@apollo/client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { FaRegCalendar, FaRegCalendarCheck } from "react-icons/fa6";
import { TagKnowledgeRenderer } from "../../../config/tagRenderer";
import DynContentRenderer from "../../../components/articleComponents/dynContentRenderer";
import { Heading1 } from "../../../components/basicComponents/headline";
import { ArticleHeaderSection } from "../../../components/basicComponents/layoutTemplates";
import Linktree from "../../../components/linktree";
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
          <img
            src={
              "http://localhost:1337" +
              headerData.cardCover.data?.attributes.url
            }
            alt="Cover Image not found"
            className="max-h-[250px] w-full object-cover "
          />
          <CardBody className="absolute h-full flex items-center justify-center drop-shadow-xl">
            <div className="text-background ">
              <Heading1>{headerData.title}</Heading1>
            </div>
          </CardBody>
          <CardFooter
            className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100" /* className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10" */
          >
            <div className="flex flex-wrap gap-2 text-tiny uppercase font-bold flex items-center flex-wrap ">
              <p className="text-tiny uppercase font-bold flex items-center flex-wrap ">
                {headerData.state + ": "}
              </p>
              <p className="text-tiny uppercase font-bold flex items-center flex-wrap ">
                <FaRegCalendar /> {formatDateToYM(headerData.startDate)}
              </p>
              {headerData.endDate ? (
                <p className="text-tiny uppercase font-bold flex items-center flex-wrap ">
                  <FaRegCalendarCheck />
                  {formatDateToYM(headerData.endDate)}
                </p>
              ) : null}
              <TagKnowledgeRenderer data={tags} />
            </div>
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
      {headerData.linktree.data == null || [] ? (
        HeaderSection
      ) : (
        <div className="flex space-x-4">
          <div className="flex-1">{HeaderSection}</div>
          <Linktree id={headerData.linktree.data.id} />
        </div>
      )}

      {/* Content Section */}
      <DynContentRenderer dynContent={dynContent} />
    </>
  );
}
