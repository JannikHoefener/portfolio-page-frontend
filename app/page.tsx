"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import { gql, useQuery } from "@apollo/client";
import { GET_ABOUTME, aboutMeResponse } from "@/types-queries/pageAboutme";
import Headline from "@/components/headline";
import Linktree from "@/components/linktree";
import CvPart from "@/components/cvPart";
import { ArticleBox } from "@/components/basicComponents";

export default function Home() {
  const { loading, error, data } = useQuery<aboutMeResponse>(GET_ABOUTME);
  if (loading || data === undefined) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.aboutMe.data.attributes);
  const thisData = data.aboutMe.data.attributes;

  return (
    <ArticleBox>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1>{thisData.caption}</h1>
      {/* About Section */}
      {thisData.SectionAbout.map((item, index) => (
        <>
          <Headline
            title={item.sectionTitle.title}
            variant={item.sectionTitle.variant}
          />
          <p>{item.text}</p>
        </>
      ))}
      {/* Linktree */}
      <Linktree id={thisData.linktree.data.id}/>
      {/* CV Section */}
      {thisData.SectionCv.map((item, index) => (<CvPart title={item.title} location={item.location} position={item.position} from={item.from} until={item.until} description={item.description} tags={[/* ...item.tags */]} />))}
      <p>
      {thisData.updatedAt}
      </p>
    </section>
    </ArticleBox>
  );
}
