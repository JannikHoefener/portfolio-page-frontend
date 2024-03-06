import { BasicComponentsProps } from "../../types-queries/basicComponentTypes";

//Text
export function Text({ children }: BasicComponentsProps) {
    return <p className="">{children}</p>;
  }
  
  //HighlightedText
  export function HLText({ children }: BasicComponentsProps) {
    return <p className="font-semibold">{children}</p>;
  }
  //LowlightedText
  export function LLText({ children }: BasicComponentsProps) {
    return <p className="text-small text-default-500">{children}</p>;
  }