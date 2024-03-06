import React from 'react'
import { BasicComponentsProps } from '../../types-queries/typesBasicComponents'
import { DynComponentContent, DynComponentsHeadlineType } from '@/types-queries/typesDynComponents'

// todo: styled Headlines here 
// with paddings etc

//Headings
export function Heading1({children}: BasicComponentsProps) {
  return(<p className="text-3xl font-bold">{children}</p>)
}
export function Heading2({children}: BasicComponentsProps) {
  return(<p className="text-2xl font-bold">{children}</p>)
}
export function Heading3({children}: BasicComponentsProps) {
  return(<p className="text-lg font-semibold">{children}</p>)
}

type HeadlineProps = {
  props: DynComponentsHeadlineType
}

/* In Strapi we can choose between 3 variants for a Headline 
   ... this have no effect on the markdown interpreter right now  */
export default function DynHeadline({props}: HeadlineProps) {
    const {headlineText, variant} = props
    switch (variant) {
        case "h1":
          return <Heading1>{headlineText}</Heading1>
        case "h2":
          return <Heading2>{headlineText}</Heading2>
        default: /*h3*/ 
          return <Heading3>{headlineText}</Heading3>
      }
}
