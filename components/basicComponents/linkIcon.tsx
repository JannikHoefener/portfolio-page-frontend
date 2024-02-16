import { Link } from "@nextui-org/link";
import React from "react";
import { button as buttonStyles } from "@nextui-org/theme";
import { DynComponentsCreateLinkType } from "@/types-queries/typesDynComponents";
import { iconChooser } from "@/config/iconChooser";

/* type linkIcon = {
  icon: JSX.Element;
  title: string; 
  url: string;
  showAnchor: boolean; 
  asButton: boolean 
};

export default function LinkIcon(props: linkIcon) {
  const { icon, title, url, showAnchor, asButton} = props;

  return (
    <Link
      isExternal
      showAnchorIcon={showAnchor}
      isBlock 
      href={url}
      aria-label={title ? title : "no title set"}
      color="foreground"
      className={asButton ? buttonStyles({ variant: "bordered", radius: "full" }) : ""}
    >
      <div className="flex gap-1 items-center justify-center display-flex ">
        {icon}
        {title}
      </div>
    </Link>
  );
} */

type dynLinkProps = {
  props: DynComponentsCreateLinkType
};
export function DynLink({props}: dynLinkProps) {
  const {description, title, type, url,website } = props;
  const asButton = type === "linkButton"
  const linkTitle = type === "linkIcon" ? "" :  website == "weblink" ? title : website
  return (
    <Link
      isExternal
      isBlock 
      href={url}
      aria-label={title ? title : "no title set"}
      color="foreground"
      className={asButton ? buttonStyles({ variant: "bordered", radius: "full" }) : ""}
    >
      <div className="flex gap-1 items-center justify-center display-flex ">
        {iconChooser(website)}
        {linkTitle} {type === "linkButton" ?  description? " ("+description+")": null : null }
      </div>
    </Link>
  );
}

