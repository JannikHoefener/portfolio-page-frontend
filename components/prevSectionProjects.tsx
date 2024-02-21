import { ProjectInfoResponse } from "@/types-queries/queryPageProjects";
import { BlogsInfoResponse } from "@/types-queries/queryPageBlog";
import PrevCard from "./prevCard";

/* defining script based in isFor */
/* Or Creating 2  PrevSection... without isFor*/

type PrevSectionProjectsProps = {
    isFor: "projects" | "blog"; /* PrevCard needs this info */
    data: ProjectInfoResponse
  };

export  function PrevSectionProjects(props: PrevSectionProjectsProps) {
  const { isFor, data } = props; // i need to initialise the type of the date based on isFor value

  const thisData = [...data.projects.data]
  return (
    <>
      <div className="grid grid-cols-3 gap-3 w-100%">
        {thisData
          .sort(
            (a, b) =>
              new Date(b.attributes.startDate).getTime() -
              new Date(a.attributes.startDate).getTime()
          )
          /* here should be sorting based on startDate: string type sorted from new to old */
          .map((dataPoint) => (
            <PrevCard
              key={dataPoint.id}
              isFor={isFor}
              id={dataPoint.id}
              title={dataPoint.attributes.title}
              description={dataPoint.attributes.description}
              cardCover={dataPoint.attributes.cardCover}
              state={dataPoint.attributes.state}
              startDate={dataPoint.attributes.startDate}
              endDate={dataPoint.attributes.endDate}
              tags={dataPoint.attributes.tags}
            />
          ))}
      </div>
    </>
  );
}