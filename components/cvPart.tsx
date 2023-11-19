import { getMonthYearName } from "@/config/dateMachine";
import { componentTagResponse } from "@/types-queries/componentTag";
import {
    Accordion, AccordionItem,
    Card,
    CardBody,
    CardFooter,
    Divider
} from "@nextui-org/react";

export type sectionCvType = {
  title: string;
  location: string;
  position: string;
  from: Date;
  until: Date;
  description: string;
  tags: componentTagResponse[];
};

export default function CvPart(props: sectionCvType) {
  const { title, location, position, from, until, description, tags } = props;
  return (
    <>
      <Card className="w-[400px]">
        <CardBody>
          <Accordion>
            <AccordionItem /* subtitle="Press to expand" */ title={title}>
              <p className="text-small text-default-500">
                {position + " - " + location}
              </p>
              <Divider />
              <p className="text-md">{description}</p>
            </AccordionItem>
          </Accordion>
        </CardBody>
        <Divider />
        <CardFooter>
          <p className="text-small text-default-500">
            {getMonthYearName(from) +
              " - " +
              (until == null ? "now" : getMonthYearName(until))}
          </p>
        </CardFooter>
      </Card>
      <p>
        <Divider orientation="vertical" />
      </p>
    </>
  );
}
