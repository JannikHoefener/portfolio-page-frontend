import { ProjectInfoResponse } from "@/types-queries/queryPageProjects";
import PrevCard from "./prevCard";

type PrevSectionProps = {
  isFor: string;
  data: ProjectInfoResponse;
};

export default function PrevSection(props: PrevSectionProps) {
  const { isFor, data } = props;
  const thisData = data.projects.data;
  /* console.log("thisData", thisData); */
  return (
    <>
      <div className="grid grid-cols-3 gap-3 w-100%">
        {thisData.map((dataPoint) => (
          <PrevCard
            key={dataPoint.id}
            isFor={isFor}
            id={dataPoint.id}
            title={dataPoint.attributes.title}
            description={dataPoint.attributes.description}
            cardCover={dataPoint.attributes.cardCover}
            state={dataPoint.attributes.state}
            createDate={dataPoint.attributes.createDate}
            tags={dataPoint.attributes.tags}
          />
        ))}
      </div>
    </>
  );
}
