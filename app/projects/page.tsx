"use client";
import PrevSection from "@/components/prevSection";
import { title } from "@/components/primitives";
import { GET_PROJECTS_INFO, ProjectInfoResponse } from "@/types-queries/queryPageProjects";
import { useQuery } from "@apollo/client";

export default function ProjectsPage() {
  /* const { loading, error, data } = useQuery<ProjectInfoResponse>(GET_PROJECTS_INFO); */
  const { loading, error, data } = useQuery<ProjectInfoResponse>(GET_PROJECTS_INFO);
  if (loading || data === undefined) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  /* const thisData = data.projects.data
  console.log("thisData", thisData) */
  return (
    <>
      <h1 className={title()}>My Projects</h1>
      <PrevSection isFor={"projects"} data={data}/>
    </>
  );
}
