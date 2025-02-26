import React from 'react';
import logo from './logo.svg';
import './App.css';
import { log } from 'console';

// func decloration
function App() { // this is a component
  // debugger
  // something useful
  // return jsx
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
  return <>This is a Title</> // fragment
}

function Rating() {
  // debugger
  console.log('Rating rendering');
  return (
    <div>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </div>
  )
}

function Accordion() {
  // debugger
  return <div>
    <h3>Menu</h3>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
}

function Star() {
  console.log('star rendered')
  return <div>star</div>
}

export default App;
