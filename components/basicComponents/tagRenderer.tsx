import { TagsResponse } from "@/types-queries/typeTags";
import { Chip } from "@nextui-org/react";
import React, { ReactComponentElement, ReactNode } from "react";
import { FaRegLightbulb, FaRegEye } from "react-icons/fa";


/* Tag-List Renderer */
export type TagRendererProps = {
  data: TagsResponse;
};

export default function TagRenderer(props: TagRendererProps) {
  const { data } = props;

  const knowledgeTags = data.data
    .filter((tagPoint) => tagPoint.attributes?.type === "Knowledge")
    .map((tagPoint) => (
      <Tag
        key={tagPoint.attributes.key + tagPoint.attributes.type}
        tagKey={tagPoint.attributes.key}
        color={"success"}
        icon={<FaRegLightbulb />}
      />
    ));

  const descriptionTags = data.data
    .filter((tagPoint) => tagPoint.attributes?.type === "Description")
    .map((tagPoint) => (
      <Tag
        key={tagPoint.attributes.key + tagPoint.attributes.type}
        tagKey={tagPoint.attributes.key}
        color={"warning"}
        icon={<FaRegEye />}
      />
    ));

  return (
    <div className="flex flex-wrap gap-2 ">
      <div className="flex gap-2 ">{descriptionTags}</div>
      <div className="flex gap-2 ">{knowledgeTags}</div>
    </div>
  );
}

/* Tag Component */

type TagComponentProps = {
  tagKey: string;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  icon: ReactNode;
};

function Tag(props: TagComponentProps) {
  if (props.tagKey == null || props.tagKey == undefined) {
    return null;
  } else
    return (
      <Chip
        color={props.color}
        variant="faded"
        startContent={props.icon}
        size="sm"
      >
        {props.tagKey}
      </Chip>
    );
}
