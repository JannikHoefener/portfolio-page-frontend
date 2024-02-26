import BlogArticle from "@/app/blog/[blogId]/blogArticle";
import React from "react";

type BlogArticleProps = {
    params: {
      blogId: number;
    };
  };

export default function DynBlogPostSite(props: BlogArticleProps) {

  return (
    <div>
      <BlogArticle id={props.params.blogId}/>
    </div>
  );
}
