import { getMonthYearName } from "@/utils/dateMachine";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { LLText, MdText } from "./basicComponents/textComponents";
import { TagsResponse } from "@/types-queries/typeTags";
import { TagKnowledgeRenderer } from "@/utils/tagRenderer";

export type sectionCvType = {
  title: string;
  location: string;
  position: string;
  from: Date;
  until: Date;
  description: string;
  tags: TagsResponse;
};

export default function CvPart(props: sectionCvType) {
  const { title, location, position, from, until, description, tags } = props;
  return (
    <>
      <Card className="w-[400px]">
        <CardBody>
          <Accordion>
            <AccordionItem /* subtitle="Press to expand" */ title={title}>
              <LLText>{position + " - " + location}</LLText>
              <Divider />
              {/* <Text>{description}</Text> */}
              <MdText text={description} />
            </AccordionItem>
          </Accordion>
          <div>
            <TagKnowledgeRenderer data={tags} />
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <LLText>
            {getMonthYearName(from) +
              " - " +
              (until == null ? "now" : getMonthYearName(until))}
          </LLText>
        </CardFooter>
      </Card>
      <div>
        <Divider orientation="vertical" />
      </div>
    </>
  );
}
