import { Link } from "@nextui-org/link";
import React from "react";
import { button as buttonStyles } from "@nextui-org/theme";

type linkIcon = {
  /* icon: React.ReactNode; */
  icon: JSX.Element;
  text: string; // "" when it should be just an icon-link
  link: string;
  showAnchor: boolean; // show that the link is external
  asButton: boolean // more like a button
};

export default function LinkIcon(props: linkIcon) {
  const { icon, text, link, showAnchor, asButton} = props;

  return (
    <Link
      isExternal
      showAnchorIcon={showAnchor}
      isBlock 
      href={link}
      aria-label={text ? text : "no title set"}
      color="foreground"
      className={asButton ? buttonStyles({ variant: "bordered", radius: "full" }) : ""}
    >
      <div className="flex gap-1 items-center justify-center display-flex ">
        {icon}
        {text}
      </div>
    </Link>
  );
}

