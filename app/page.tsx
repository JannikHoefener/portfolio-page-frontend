"use client";

import CvPart from "@/components/cvPart";
import Headline from "@/components/basicComponents/headline";
import Linktree from "@/components/linktree";
import { GET_ABOUTME, aboutMeResponse } from "@/types-queries/queryPageAboutme";
import { useQuery } from "@apollo/client";
import { ArticleBox, PageLayout } from "@/components/basicComponents/layoutTemplates";

export default function Home() {
  const { loading, error, data } = useQuery<aboutMeResponse>(GET_ABOUTME);
  if (loading || data === undefined) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  /* console.log(data.aboutMe.data.attributes); */
  const thisData = data.aboutMe.data.attributes;

  return (
    <PageLayout>
      {/*  */}
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
      {/* {thisData.linktree.data.id === null ? <></> : <Linktree id={thisData.linktree.data.id}/>} */}
      <Linktree id={thisData.linktree.data.id} />
      {/* CV Section */}
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {thisData.SectionCv.map((item, index) => (
          <CvPart
            title={item.title}
            location={item.location}
            position={item.position}
            from={item.from}
            until={item.until}
            description={item.description}
            tags={
              [
                /* ...item.tags */
              ]
            }
          />
        ))}
      </div>
      <p>{thisData.updatedAt}</p>
      {/* </section> */}
    </PageLayout>
  );
}
