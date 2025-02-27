import React from "react"

export function Accordion(props: any) {
  console.log('accordion rendered')
  // debugger
  return <div>
    <AccordionTitle title={props.title}/>
    <AccordionBody/>
  </div>
}

function AccordionTitle(props: any) {
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