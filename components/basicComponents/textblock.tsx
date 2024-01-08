import React, { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BasicComponentsProps } from '../../types-queries/basicComponentTypes';

//Text
export function Text({children}: BasicComponentsProps) {
    return(<p className="">{children}</p>)
}

//HighlightedText
export function HLText({children}: BasicComponentsProps) {
    return(<p className="font-semibold">{children}</p>)
}
//LowlightedText
export function LLText({children}: BasicComponentsProps) {
    return(<p className="text-small text-default-500">{children}</p>)
}

//Markdown-Text-Interpreter
type MdTextProps = {
    text: string
}
export function MdText(props: MdTextProps) {
    return(<Markdown className={"markdown"} remarkPlugins={[remarkGfm]}>{props.text}</Markdown>)
    /* https://stackoverflow.com/questions/74607419/react-markdown-don%C2%B4t-render-markdown */
} 