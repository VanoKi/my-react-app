import React from 'react';
import logo from './logo.svg';
import './App.css';
import { log } from 'console';

// func decloration
function App() { // this is a component
  // debugger
  // something useful
  // return jsx
  console.log('App rendering')
  return (
    <div>
      <Title/>
      <Rating />
      <Accordion></Accordion>
      <Rating />
    </div>
  );
}

// expression
// const App = function() {
//   return (
//     <div>
//       This is app component
//     </div>
//   );
// }

// arrow
// const App = () => {
//   return (
//     <div>
//       This is arrow component
//     </div>
//   );
// }

function Title() {
  console.log('Title rendered')
  return <>This is a Title</> // fragment
}

function Rating() {
  // debugger
  console.log('Rating rendering');
  return (
    <>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </>
  )
}

function Accordion() {
  console.log('accordion rendered')
  // debugger
  return <div>
    <AccordionTitle/>
    <AccordionBody/>
  </div>
}

function AccordionTitle() {
  console.log('AccordionTitle rendered')
  return <h3>Menu</h3>
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

function Star() {
  console.log('star rendered')
  return <div>star</div>
}

export default App;
