import React from 'react';
import logo from './logo.svg';
import './App.css';

function hello(){
  debugger
  alert('hello')
}
hello()

// func decloration
function App() { // this is a component
  debugger
  // something useful
  // return jsx
  return (
    <div>
      This is app component
      <Rating />
      <Accordion></Accordion>
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

function Rating() {
  debugger
  return (
    <div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
    </div>
  )
}

function Accordion() {
  debugger
  return <div>
    <h3>Menu</h3>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
}

export default App;
