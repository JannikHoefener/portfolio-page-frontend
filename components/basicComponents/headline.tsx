import { componentHeadlineType } from '@/types-queries/componentHeadline'
import React from 'react'
import { BasicComponentsProps } from '../../types-queries/basicComponentTypes'

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

export default function Headline(props: componentHeadlineType) {
    const {title, variant} = props
    switch (variant) {
        case "h1":
          return <h1>{title}</h1>
        case "h2":
          return <h2>{title}</h2>
        default: /*h3*/ 
          return <h3>{title}</h3>
      }
}
