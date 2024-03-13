"use client";

import DynHeadline, {
  Heading2,
} from "@/components/basicComponents/headlineComponents";
import { PageLayout } from "@/components/basicComponents/layoutComponents";
import { DynTextSection } from "@/components/basicComponents/textComponents";
import CvPart from "@/components/cvPart";
import Linktree from "@/components/linktree";
import { GET_ABOUTME, aboutMeResponse } from "@/types-queries/queryPageAboutme";
import { TagKnowledgeRenderer } from "@/utils/tagRenderer";
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
        <DynTextSection key={index} props={item} />
      ))}

      <div className="grid grid-cols-2 gap-4 py-8 md:py-10">
        {/* Linktree */}
        <div className="flex flex-col gap-2">
          <Heading2>Skills</Heading2>
          {thisData.Skills.map((skillPart, index) => (
            <div key={index}>
              <DynHeadline props={skillPart.SkillHeadline} />
              <TagKnowledgeRenderer data={skillPart.tags} />
            </div>
          ))}
          <Heading2>Linktree</Heading2>
          <Linktree id={thisData.linktree.data.id} />
        </div>
        {/* CV Section */}
        <div className="flex flex-col gap-2">
          <Heading2>CV Part</Heading2>
          {thisData.SectionCv.slice()
            .sort(
              (a, b) => new Date(b.from).getTime() - new Date(a.from).getTime()
            )
            .map((item, index) => (
              <CvPart
                title={item.title}
                location={item.location}
                position={item.position}
                from={item.from}
                until={item.until}
                description={item.description}
                tags={item.tags}
                key={index}
              />
            ))}
        </div>
      </div>
      <p>{thisData.updatedAt}</p>
    </PageLayout>
  );
}
