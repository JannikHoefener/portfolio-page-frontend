import { Link } from "@nextui-org/link";
import React from "react";
import { button as buttonStyles } from "@nextui-org/theme";
import { DynComponentsCreateLinkType } from "@/types-queries/typesDynComponents";
import { iconChooser } from "@/config/iconChooser";

type dynLinkProps = {
  props: DynComponentsCreateLinkType;
};
export function DynLink({ props }: dynLinkProps) {
  const { description, title, type, url, website } = props;
  const asButton = type === "linkButton";
  const linkTitle =
    type === "linkIcon" ? "" : website == "weblink" ? title : website;
  return (
    <Link
      isExternal
      isBlock
      href={url}
      aria-label={title ? title : "no title set"}
      color="foreground"
      className={
        asButton ? buttonStyles({ variant: "bordered", radius: "full" }) : "bg-transparent bg-none"
      }
      
    >
      <div className="bg-transparent bg-none flex gap-1 items-center justify-center display-flex ">
        {iconChooser(website)}
        {linkTitle}{" "}
        {type === "linkButton"
          ? description
            ? " (" + description + ")"
            : null
          : null}
      </div>
    </Link>
  );
}
