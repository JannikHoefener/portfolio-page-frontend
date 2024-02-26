"use client";
import { Heading1 } from "@/components/basicComponents/headline";
import { PrevSectionProjects } from "@/components/overviewComponents/prevSectionProjects";
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
      <Heading1>My Projects</Heading1>
      <PrevSectionProjects isFor={"projects"} data={data}/>
    </>
  );
}
