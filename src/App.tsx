import React from 'react';
import logo from './logo.svg';
import './App.css';

function hello() {
  debugger
  alert('Hello')
}
// hello()

// func decloration
function App() { // this is a component
  // something useful
  // return jsx
  return (
    <div>
      This is app component
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
