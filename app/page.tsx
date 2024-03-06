"use client";

import DynHeadline from "@/components/basicComponents/headline";
import { PageLayout } from "@/components/basicComponents/layoutTemplates";
import { DynTextSection } from "@/components/basicComponents/textblock";
import CvPart from "@/components/cvPart";
import Linktree from "@/components/linktree";
import { GET_ABOUTME, aboutMeResponse } from "@/types-queries/queryPageAboutme";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { loading, error, data } = useQuery<aboutMeResponse>(GET_ABOUTME);
  /*   const { loading, error, data } = useQuery<TagsResponse>(GET_TAGS); */
  if (loading || data === undefined) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const thisData = data.aboutMe.data.attributes;

  return (
    <PageLayout>
      <h1>{thisData.caption}</h1>
      {/* About Section */}
      {thisData.SectionAbout.map((item, index) => (
          <DynTextSection props={item} />
      ))}

      <div className="grid grid-cols-2 gap-4 py-8 md:py-10">
        {/* Linktree */}
        <div>
          <Linktree id={thisData.linktree.data.id} />
          {/* <TagRenderer
            data={{
              data: [],
            }}
          /> */}
        </div>
        {/* CV Section */}
        <div className="flex flex-col gap-2">
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
              key={index}
            />
          ))}
        </div>
      </div>
      <p>{thisData.updatedAt}</p>
    </PageLayout>
  );
}
