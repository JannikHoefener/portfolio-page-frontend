"use client";
import { PrevSectionBlogs } from "@/components/prevSectionBlogs";
import { title } from "@/components/primitives";
import { BlogsInfoResponse, GET_BLOGS_INFO } from "@/types-queries/queryPageBlog";
import { useQuery } from "@apollo/client";

export default function BlogPage() {
  /* const { loading, error, data } = useQuery<ProjectInfoResponse>(GET_PROJECTS_INFO); */
  const { loading, error, data } = useQuery<BlogsInfoResponse>(GET_BLOGS_INFO);
  if (loading || data === undefined) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  /* const thisData = data.projects.data
  console.log("thisData", thisData) */
  return (
    <>
      <h1 className={title()}>My Blog-Posts:</h1>
      <PrevSectionBlogs isFor={"blogs"} data={data}/>
    </>
  );
}
