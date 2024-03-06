"use client";
import {
  GET_LINKTREE,
  linktreeResponse,
} from "@/types-queries/componentLinktree";
import { useQuery } from "@apollo/client";
import { Avatar, Card, CardBody } from "@nextui-org/react";
import { IoPeopleCircleOutline } from "react-icons/io5";

import { Heading1, Heading3 } from "./basicComponents/headline";
import { DynLink } from "./basicComponents/linkIcon";
type linktreeProps = {
  id: number;
};

export default function Linktree(props: linktreeProps) {
  const { loading, error, data } = useQuery<linktreeResponse>(GET_LINKTREE, {
    variables: { linktreeID: props.id },
  });
  if (loading || data === undefined) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  /* console.log(data.linktree.data.attributes); */
  const ltdata = data.linktree.data.attributes;

  return (
    <div className="min-w-lg max-w-lg">
      {/* TODO: Linktree soll eine fixe breite bekommen, mehr als jz */}
      <section>
        <Card shadow="lg">
          <CardBody>
            {/* CardImage */}
            <div className="flex justify-center">
              <Avatar
                src={
                  "http://localhost:1337"+ltdata.profileImage.data?.attributes.url
                } /* TODO: need to be changed after deployment */
                showFallback
                fallback={
                  <IoPeopleCircleOutline
                    className="animate-pulse w-20 h-20 text-default-500"
                    fill="currentColor"
                    size={20}
                  />
                }
                name={ltdata.title}
                className="w-20 h-20 text-large"
              />
            </div>
            {/* Title */}
            <div className="flex justify-center pt-2">
              <Heading1>{ltdata.title}</Heading1>
            </div>

            {/* TODO: Space for Tags  */}

            {/* Description */}
            <div className="flex justify-center max-w-sm">
              <Heading3>{ltdata.description}</Heading3>
            </div>

            {/* Links */}
            {/* LinkIcons */}
            <div className=" flex items-center justify-center pt-4 ">
              {ltdata.createLinks
                .filter((link) => link.type === "linkIcon")
                .map((link) => (
                  <div className=" appearance-none bg-transparent bg-none shadow-xl shadow-cyan-500/50">
                    <DynLink props={link} key={link.url} />
                  </div>
                ))}
            </div>
            {/* LinkButtons */}
            <div className="flex flex-col justify-center gap-4 pt-4">
              {ltdata.createLinks
                .filter((link) => link.type === "linkButton")
                .map((link) => (
                  <DynLink props={link} key={link.url} />
                ))}
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
