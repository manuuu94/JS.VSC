import React from 'react';
import ReactDOM from 'react-dom/client';

//this is a react component
const myFirstElement = <h1>Hello React!</h1>

const manusfirstelement = 
<p>this is manus first attempt of a paragraph with react.js</p>

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

//createRoot() function take one argu, an html element.
//its purpose is to define the html element where the component should be displayed. 
const root = ReactDOM.createRoot(document.getElementById('test'));
const root2 = ReactDOM.createRoot(document.getElementById('manu'));
const element = ReactDOM.createRoot(document.getElementById('element'));

//render method is called to define the React component to render. 
root2.render(manusfirstelement);
root.render(myFirstElement);
element.render(myelement);


//There is another folder in the root directory of your React project, 
//named "public". In this folder, there is an index.html file.
//You'll notice a single <div> in the body of this file. 
//This is where our React application will be rendered.