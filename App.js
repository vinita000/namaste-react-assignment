import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './src/components/Header';
import Header1 from './src/components/Header1';

const heading = React.createElement('h1', null, "Hello World From React");
const header = React.createElement('div', {class: 'title'}, [
  React.createElement('h1', {}, 'This is the First Title of React Assignment'),
  React.createElement('h1', {}, 'This is the Second Title of React Assignment'),
  React.createElement('h1', {}, 'This is the Third Title of React Assignment')
])

// create h1 element using jsx
const header1 = <div className='title'>
  <h1>{"This is the First Title of React Assignment using jsx"}</h1>
  <h1>{"This is the Second Title of React Assignment using jsx"}</h1>
  <h1>{"This is the Third Title of React Assignment using jsx"}</h1>
</div>


const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
// root.render(<Header name={"vinita"}/>);
root.render(<Header1 />)