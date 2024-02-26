import ProjectArticle from "@/app/projects/[projectId]/projectArticle";
import React from "react";

type ProjectArticleProps = {
  params: {
    projectId: number;
  };
};

export default function DynProjectSite(props: ProjectArticleProps) {
  return (
    <div>
      <ProjectArticle id={props.params.projectId} />
    </div>
  );
}
