import React from 'react'

type articleHeaderRendererProps = {
    isFor: "projects" | "blog"; /* There will be a diffrence */
}

export default function articleHeaderRenderer() {
  return (
    <div>articleHeaderRenderer</div>
  )
}
