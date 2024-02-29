import { ProjectInfoResponse } from "@/types-queries/queryPageProjects";
import PrevCard from "./prevCard";
import { BlogsInfoResponse } from "@/types-queries/queryPageBlog";

type PrevSectionProps = {
  isFor: string;
  data: ProjectInfoResponse | BlogsInfoResponse;
};

const isProjectInfoResponse = (data:any) : data is ProjectInfoResponse => {
  return data.projects !== undefined;
}

export default function PrevSection(props: PrevSectionProps) {
  const { isFor, data } = props;

  if(isProjectInfoResponse(data)){
    data.projects
  } //toDo: for blogs
  const thisData = [...data.projects.data]; // Create a shallow copy of the array to allow to sort the data and evoid (read-only error)
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
