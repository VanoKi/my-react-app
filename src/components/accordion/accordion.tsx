import React from "react"

type AccordionPropsType = {
  title: string,
  collapsed: boolean
}
export function Accordion(props: AccordionPropsType) {
  console.log('accordion rendered')
  // debugger
  if (props.collapsed) {
    return (
      <div>
      <AccordionTitle title={props.title}/>
    </div>
    )
  } else {
    return (
    <div>
      <AccordionTitle title={props.title}/>
      <AccordionBody/>
    </div>
    )
  }
}

type AccordionTitlePropsType = {
  title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendered')
  return <h3>{props.title}</h3>
}
function AccordionBody() {
  console.log('AccordionBody rendered')
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
}

export default Accordion;