import { DynComponentContent } from "@/types-queries/typesDynComponents";
import React from "react";
import DynHeadline from "../basicComponents/headline";
import { DynTextSection } from "../basicComponents/textblock";
import { DynLink } from "../basicComponents/linkIcon";

type DynContentRendererProps = {
  dynContent: DynComponentContent[];
};

export default function DynContentRenderer(props: DynContentRendererProps) {
  const { dynContent } = props;
  return (
    <>
      {dynContent.map((component /* ,index */) => (
        <div /* key={index} */>
          {/* Render components based on their typename and order */}
          {component.__typename === "ComponentComponentsHeadline" && (
            <>{<DynHeadline props={component} />}</>
          )}
          {component.__typename === "ComponentComponentsTextSection" && (
            <>{<DynTextSection props={component} />}</>
          )}
          {component.__typename === "ComponentComponentsCreateLink" && (
            <>{<DynLink props={component} />}</>
          )}
          {/* TODO:ComponentComponentsAlbum! */}
          {component.__typename === "ComponentComponentsAlbum" && (
            <>{/* {<LinkBlock props={component}  />} */}</>
          )}
        </div>
      ))}
    </>
  );
}
