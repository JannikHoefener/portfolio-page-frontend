import { componentHeadlineType } from '@/types-queries/componentHeadline'
import React from 'react'

// todo: styled Headlines here 
// with paddings etc

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
