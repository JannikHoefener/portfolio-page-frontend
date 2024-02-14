import { ComponentSingleImageResponse } from "@/types-queries/componentSingleImage";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import TagRenderer, {
  ComponentTagsResponse,
} from "./basicComponents/tagRenderer";

type PrevCardProps = {
  // => for both
  isFor: string; // "projects" or "blog"
  id: string;
  title: string;
  description: string;
  cardCover?: ComponentSingleImageResponse; //TODO! 
  createDate: string; //TODO! 
  tags: ComponentTagsResponse; 
  // => for Projects
  state?: string;
  endDate?: string;
  // => for blog
};

export default function PrevCard(props: PrevCardProps) {
  /* TODO: link to project/ blog */
  const { isFor, id, title, description, cardCover, state, tags } = props;
  return (
    <Card as={Link} href={id ? `/${isFor}/${id}` : `/`} className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{state}</p>
        <h4 className="font-bold text-large">{title}</h4>
        <TagRenderer data={tags}  />
        
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
