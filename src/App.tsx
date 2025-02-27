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
      {/* <input type="text"
              value={'text'}/>
      <input value="yo" /> */}
      <Title title={'this is a component'}/>
      {/* <Title title={'User Page'}/> */}
      {/* <Rating value={3}/> */}
      <Accordion title={'menu 1'} collapsed={true}/>
      <Accordion title={'menu 2'} collapsed={false}/>
      {/* <Rating value={5}/> */}
      {/* <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/> */}
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
type TitlePropsType = {
  title: string
}
function Title(props: TitlePropsType) {
  console.log('Title rendered')
  return <h1>{props.title}</h1> // fragment
}

export default App;
