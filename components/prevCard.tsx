import { ComponentSingleImageResponse } from "@/types-queries/typesImages";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { TagsResponse } from "@/types-queries/typeTags";
import {
  TagDescriptionRenderer,
  TagKnowledgeRenderer,
} from "./basicComponents/tagRenderer";

type PrevCardProps = {
  // => for both
  isFor: string; // "projects" or "blog"
  id: string;
  title: string;
  description: string;
  cardCover?: ComponentSingleImageResponse; //TODO!
  createDate: string; //TODO!
  tags: TagsResponse;
  // => for Projects
  state?: string;
  endDate?: string;
  // => for blog
};

export default function PrevCard(props: PrevCardProps) {
  /* TODO: link to project/ blog */
  const { isFor, id, title, description, cardCover, state, tags } = props;
  console.log(
    "PrevCard",
    tags /* .data.map((tag)=> console.log(tag.attributes.key)) */
  );
  return (
    <Card as={Link} href={id ? `/${isFor}/${id}` : `/`} className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{state}</p>
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
