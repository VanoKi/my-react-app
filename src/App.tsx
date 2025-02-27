import React from 'react';
import './App.css';
import Accordion from './components/accordion/accordion';
import {Rating} from "./components/rating/Rating";

// func decloration
function App() { // this is a component
  // debugger
  // something useful
  // return jsx
  console.log('App rendering')
  return (
    <div>

      <input type="text"
              value={'text'}/>
      <input value="yo" />

      <Title/>
      <Rating value={3}/>
      <Accordion></Accordion>
      <Rating value={4}/>
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

export default App;
