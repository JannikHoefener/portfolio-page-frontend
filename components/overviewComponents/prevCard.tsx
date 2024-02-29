import { ComponentSingleImageResponse } from "@/types-queries/typesImages";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { TagsResponse } from "@/types-queries/typeTags";
import {
  TagDescriptionRenderer,
  TagKnowledgeRenderer,
} from "../../config/tagRenderer";
import { formatDateToYM } from "@/config/dateMachine";
import {
  FaHourglassEnd,
  FaRegCalendar,
  FaRegCalendarCheck,
} from "react-icons/fa6";

type PrevCardProps = {
  // => for both
  isFor: string; // "projects" or "blog"
  id: string;
  title: string;
  description: string;
  cardCover?: ComponentSingleImageResponse; //TODO!
  tags: TagsResponse;
  // => for Projects
  state?: string;
  startDate?: string; //TODO!
  endDate?: string;
  // => for blog
  publishedAt?: string;
};

export default function PrevCard(props: PrevCardProps) {
  /* TODO: link to project/ blog */
  const {
    isFor,
    id,
    title,
    description,
    cardCover,
    state,
    tags,
    startDate,
    endDate,
  } = props;
  return (
    <Card as={Link} href={id ? `/${isFor}/${id}` : `/`} className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="flex flex-wrap gap-2 text-tiny uppercase font-bold flex items-center flex-wrap ">
          {state === undefined ? null: <p className="text-tiny uppercase font-bold flex items-center flex-wrap ">
            {state + ": "}
          </p> }
          {startDate && (
          <p className="text-tiny uppercase font-bold flex items-center flex-wrap ">
            <FaRegCalendar /> {formatDateToYM(startDate)}
          </p>
          )}
          {endDate ? (
            <p className="text-tiny uppercase font-bold flex items-center flex-wrap ">
              <FaRegCalendarCheck />
              {formatDateToYM(endDate)}
            </p>
          ) : null}
        </div>

        <h4 className="font-bold text-large">{title}</h4>
        <div className="flex flex-wrap gap-2 ">
          <div className="flex gap-2 ">
            <TagDescriptionRenderer data={tags} />
          </div>
          <div className="flex gap-2 ">
            <TagKnowledgeRenderer data={tags} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">{description}</small>
        {/* {cardCover ? (
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={"http://localhost:1337/" + cardCover.data?.attributes.url} //todo!
            width={270}
          />
        ) : null} */}
      </CardBody>
    </Card>
  );
}
