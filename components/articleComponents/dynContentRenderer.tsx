import { DynComponentContent } from "@/types-queries/typesDynComponents";
import React from "react";
import DynHeadline from "../basicComponents/headlineComponents";
import { DynTextSection } from "../basicComponents/textComponents";
import { DynLink } from "../basicComponents/linkComponents";
import { DynImageAlbum } from "../basicComponents/imageComponents";

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
            <>{<DynImageAlbum props={component}  />}</>
          )}
        </div>
      ))}
    </>
  );
}
