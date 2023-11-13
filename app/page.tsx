"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import { gql, useQuery } from "@apollo/client";
import { GET_ABOUTME, aboutMeResponse } from "@/queries/aboutme";


export default function Home() {
  const { loading, error, data } = useQuery<aboutMeResponse>(GET_ABOUTME);
  if (loading || data === undefined) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.aboutMe.data.attributes.aboutMe)

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <p>
		  {data.aboutMe.data.attributes.caption}
	  </p>
	  <p>
		  {data.aboutMe.data.attributes.aboutMe}
	  </p>
	  <p>
		{/* todo: how to handle the new strapi JSON text block */}
		  {/* {data.aboutMe.data.attributes.curriculumVitae} */}
	  </p>
    </section>
  );
}
