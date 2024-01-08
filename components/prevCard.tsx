import { SingleImageType } from "@/types-queries/componentSingleImage";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type PrevCardProps = {
  isFor: string; // "projects" or "blog"
  id: number;
  title: string;
  description: string;
  cardCover?: SingleImageType; //todo for both
  state?: string; //for Projects
  tags?: string[]; //todo for projects
  releaseDate?: Date; //todo for blog
};

export default function PrevCard(props: PrevCardProps) {
  /* TODO:
    - link to project/ blog
    -  */
  const { isFor, id, title, description, cardCover } = props;

  return (
    <Card as={Link} href={id ? `/${isFor}/${id}` : `/`} className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Test Text</p>
        <small className="text-default-500">{description}</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {cardCover ? (
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={"http://localhost:1337/"+ cardCover.data.attributes.url} //todo!
            width={270}
          />
        ) : null}
      </CardBody>
    </Card>
  );
}
