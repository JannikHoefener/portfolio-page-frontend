import { DynComponentsTextSectionType } from "@/types-queries/typesDynComponents";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DynHeadline from "./headlineComponents";

import { BasicComponentsProps } from "../../types-queries/typesBasicComponents";

//HighlightedText
export function HLText({ children }: BasicComponentsProps) {
  return <p className="font-semibold">{children}</p>;
}
//LowlightedText
export function LLText({ children }: BasicComponentsProps) {
  return <p className="text-small text-default-500">{children}</p>;
}

//Markdown-Text-Interpreter
type MdTextProps = {
  text: string;
};

const formatMarkdown = (markdownText: string) => {
  return markdownText.replace(/\n/g, "<br />");
  /* just figured it out: &nbsp;  ( with two spaces after &nbsp; )*/
};
export function MdText(props: MdTextProps) {
  return (
    <div className="text-left">
      <Markdown className={"markdown"} remarkPlugins={[remarkGfm]}>
        {props.text}
      </Markdown>
    </div>
  );
  /* https://stackoverflow.com/questions/74607419/react-markdown-don%C2%B4t-render-markdown */
}
type DynTextSectionProps = {
  props: DynComponentsTextSectionType;
};
export function DynTextSection({ props }: DynTextSectionProps) {
  const { sectionTitle, text } = props;
  return (
    <>
      <DynHeadline props={sectionTitle} />
      <MdText text={text} />
    </>
  );
}
