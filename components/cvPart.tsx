import { getMonthYearName } from "@/config/dateMachine";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { MdText } from "./basicComponents/textblock";
import { TagsResponse } from "@/types-queries/typeTags";
import { LLText } from "./basicComponents/styledText";

export type sectionCvType = {
  title: string;
  location: string;
  position: string;
  from: Date;
  until: Date;
  description: string;
  tags: TagsResponse[];
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
