"use client";
import {
  GET_LINKTREE,
  linktreeResponse,
} from "@/types-queries/componentLinktree";
import { useQuery } from "@apollo/client";
import { Avatar, Card, CardBody } from "@nextui-org/react";
import { IoPeopleCircleOutline } from "react-icons/io5";

import { iconChooser } from "@/config/iconChooser";
import LinkIcon from "./linkIcon";
import { Heading1, Heading3 } from "./basicComponents/headline";
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
    <div className="min-w-3xl">{/* todo: Linktree soll eine fixe breite bekommen, mehr als jz */}
      <section >
        <Card shadow="lg">
          <CardBody>
              {/* CardImage */}
              <div className="flex justify-center">
                <Avatar
                  src={"http://localhost:1337/uploads/hero_card_2fa0c97532.png"} /* toDO: here the upload */
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
                <Heading3>{ltdata.description}</Heading3>
              </div>

              {/* Links */}
              {/* LinkIcons */}

              <div className="flex items-center justify-center pt-4">
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
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
