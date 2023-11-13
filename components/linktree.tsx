"use client";
import { GET_LINKTREE, linktreeResponse } from "@/queries/linktree";
import { useQuery } from "@apollo/client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

import Image from "next/image";
import LinkIcon from "./linkIcon";
import { BsInstagram } from "react-icons/bs";
import { iconChooser } from "@/config/iconChooser";
type linktreeProps = {
  id: number;
};

export default function Linktree(props: linktreeProps) {
  const { loading, error, data } = useQuery<linktreeResponse>(GET_LINKTREE, {
    variables: { linktreeID: props.id },
  });
  if (loading || data === undefined) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.linktree.data.attributes);
  const ltdata = data.linktree.data.attributes;


  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
      <Card shadow="lg">
        <CardBody>
          <div className="flex flex-col w-full">
            {/* CardImage */}
            <div className="flex justify-center">
              <Image
                /* http://localhost:1337/uploads/hero_card_2fa0c97532.png */
                src={
                  "/http://localhost:1337" +
                  ltdata.profileImage.data.attributes.url
                }
                width={200}
                height={200}
                alt={
                  ltdata.profileImage.data.attributes.url +
                  " => image not found"
                }
                className="justify-center rounded-lg border-large"
              />
            </div>
            {/* Title */}
            <div className="flex justify-center pt-2">
              <h2 className="text-3xl font-bold">{ltdata.title}</h2>
            </div>

            {/* TODO: Space for Tags  */}
            {/* <div className="flex justify-center m-4 gap-4">
              <Chip variant="shadow" color="primary" size="sm">
                Next.js 13
              </Chip>
              <Chip variant="shadow" color="primary" size="sm">
                NextUI
              </Chip>
              <Chip variant="shadow" color="primary" size="sm">
                YouTuber
              </Chip>
            </div> */}

            {/* Description */}
            <div className="flex justify-center max-w-sm">
              <p className="text-lg text-center font-semibold">
                {ltdata.description}
              </p>
            </div>

            {/* Links */}
            {/* LinkIcons */}


            <div className="flex flex-col justify-center gap-4 pt-4">
              {ltdata.createLinks.map((link, index) => (
                <>
                  {link.type === "linkIcon" ? (
                    <LinkIcon
                      icon={iconChooser(link.website)}
                      text={""}
                      link={link.url}
                      showAnchor={false}
                      asButton={false}
                    />
                  ) : null}
                </>
              ))}
            </div>
            {/* LinkButtons */}
            <div className="flex flex-col justify-center gap-4 pt-4">
              {ltdata.createLinks.map((link, index) => (
                <>
                  {link.type === "linkButton" ? (
                    <LinkIcon
                      icon={iconChooser(link.website)}
                      text={
                        link.website == "weblink" ? link.title : link.website
                      }
                      link={link.url}
                      showAnchor={false}
                      asButton={true}
                    />
                  ) : null}
                </>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
