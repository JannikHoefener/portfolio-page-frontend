import { ComponentSingleImageResponse } from "@/types-queries/componentSingleImage";
import { ComponentTagsResponse } from "@/types-queries/componentTag";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type PrevCardProps = {
  isFor: string; // "projects" or "blog"
  id: string;
  title: string;
  description: string;
  cardCover?: ComponentSingleImageResponse; //TODO! for both
  // => for Projects
  state?: string;  // DONE
  tags?: ComponentTagsResponse; // TODO!
  // => for blog
  releaseDate?: Date; // TODO!
};

export default function PrevCard(props: PrevCardProps) {
  /* TODO:
    - link to project/ blog
    -  */
  const { isFor, id, title, description, cardCover, state } = props;

  return (
    <Card as={Link} href={id ? `/${isFor}/${id}` : `/`} className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{state}</p>
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-default-500">{description}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {cardCover ? (
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={"http://localhost:1337/"+ cardCover.data?.attributes.url} //todo!
            width={270}
          />
        ) : null}
      </CardBody>
    </Card>
  );
}
