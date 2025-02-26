import React from 'react';
import logo from './logo.svg';
import './App.css';
import { log } from 'console';
import Accordion from './components/accordion/accordion';

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

function Star() {
  console.log('star rendered')
  return <div>star</div>
}

export default App;
