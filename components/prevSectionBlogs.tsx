import { BlogsInfoResponse } from "@/types-queries/queryPageBlog";
import PrevCard from "./prevCard";

type PrevSectionBlogProps = {
    isFor: string;
    data: BlogsInfoResponse ;
  };
  
  export function PrevSectionBlogs(props: PrevSectionBlogProps) {
    const { isFor, data } = props;
    const thisData = [...data.blogs.data]; // Create a shallow copy of the array to allow to sort the data and evoid (read-only error)
    return (
      <>
        <div className="grid grid-cols-3 gap-3 w-100%">
          {thisData
            .sort(
              (a, b) =>
                new Date(b.attributes.publishedAt).getTime() -
                new Date(a.attributes.publishedAt).getTime()
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
                startDate={dataPoint.attributes.publishedAt}
                tags={dataPoint.attributes.tags}
              />
            ))}
        </div>
      </>
    );
  }