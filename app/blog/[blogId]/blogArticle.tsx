"use client";
import DynContentRenderer from "@/components/articleComponents/dynContentRenderer";
import { Heading1 } from "@/components/basicComponents/headlineComponents";
import { ArticleHeaderSection } from "@/components/basicComponents/layoutComponents";
import Linktree from "@/components/linktree";
import { formatDateToYM } from "@/utils/dateMachine";
import { TagKnowledgeRenderer } from "@/utils/tagRenderer";
import {
  BlogResponse,
  GET_BLOG,
  GetBlogId,
} from "@/types-queries/queryPageBlog";
import { useQuery } from "@apollo/client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { FaRegCalendar } from "react-icons/fa6";
import {Image} from "@nextui-org/react";

type blogProps = {
  id: number;
};

export default function BlogArticle(props: blogProps) {
  const { loading, error, data } = useQuery<BlogResponse, GetBlogId>(GET_BLOG, {
    variables: { blogID: props.id },
  });
  /*   const { loading, error, data } = useQuery<TagsResponse>(GET_TAGS); */
  if (loading || data === undefined)
    return <p>Loading data for projectArticle with propsID: {props.id}</p>;
  if (error) return <p>Error : {error.message}</p>;

  const headerData = data.blog.data.attributes;
  const dynContent = data.blog.data.attributes.content;
  const tags = data.blog.data.attributes.tags;
  console.log(
    "tagsProjectArt",
    tags /* .data.map((tag)=> console.log(tag.attributes.key)) */
  );
  const HeaderSection = (
    <>
      <ArticleHeaderSection>
        <Card isFooterBlurred radius="lg" className="m-10 border-none ">
          {headerData.cardCover.data === null ? (
            <div className="min-h-[250px] max-h-[250px] w-full object-cover "></div>
          ) : (
            <Image
              src={
                "http://localhost:1337" +
                headerData.cardCover.data?.attributes.url
              }
              alt="Cover Image not found"
              className="min-h-[250px] max-h-[250px] w-full object-cover "
            />
          )}
          <CardBody className="absolute h-full flex items-center justify-center drop-shadow-xl">
            <Heading1>{headerData.title}</Heading1>
          </CardBody>
          <CardFooter
            className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100" /* className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10" */
          >
            <div className="flex flex-wrap gap-2 text-tiny uppercase font-bold flex items-center flex-wrap ">
              {/* <p className="text-tiny uppercase font-bold flex items-center flex-wrap ">
                {headerData.state + ": "}
              </p> */}
              <p className="text-tiny uppercase font-bold flex items-center flex-wrap ">
                <FaRegCalendar /> {formatDateToYM(headerData.updatedAt)}
              </p>
              {/* {headerData.endDate ? (
                <p className="text-tiny uppercase font-bold flex items-center flex-wrap ">
                  <FaRegCalendarCheck />
                  {formatDateToYM(headerData.endDate)}
                </p>
              ) : null} */}
              <TagKnowledgeRenderer data={tags} />
            </div>
          </CardFooter>
        </Card>
        <div className="mb-10 mx-10">
          <p>{headerData.description}</p>
        </div>
      </ArticleHeaderSection>
    </>
  );
  return (
    <>
      {/* Header */}
      {headerData.linktrees.data === null || [] ? (
        HeaderSection
      ) : (
        <div className="flex space-x-4">
          <div className="flex-1">{HeaderSection}</div>
          <Linktree id={headerData.linktrees.data.id} />
        </div>
      )}

      {/* Content Section */}
      <div className="mx-10">
        <DynContentRenderer dynContent={dynContent} />
      </div>
    </>
  );
}
