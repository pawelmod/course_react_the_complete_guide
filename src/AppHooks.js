//function component with state management by React JS Hooks. using useState method

import React, { useState } from 'react';
import './App.css';
import MyComponent01 from './MyComponent/MyComponent01';
import MyComponent02 from './MyComponent/MyComponent02';

const AppHooks = () => {
  
const [componentState, setComponentState] = useState(
    {
        parameters:[
            {stringPar:'stringValueAAA' , intPar: 111},
            {stringPar:'stringValueBBB' , intPar: 222},
            {stringPar:'stringValueCCC' , intPar: 333},
        ]
      }
)

const myButtonClickHandler = () =>
      {
        //alert("myButtonClickHandler"); 
        console.log("myButtonClickHandler");
        console.log("componentState.parameters[0].intPar: "+componentState.parameters[0].intPar);
    
    var i = componentState.parameters[0].intPar;
    i++;
    console.log("i: "+i);
    
    setComponentState(
          {parameters:[
            {stringPar:'stringValueAAA' , intPar: i},
            {stringPar:'stringValueBBB' , intPar: 222},
            {stringPar:'stringValueCCC' , intPar: 333},
        ]}
        );
      }

    return (
      <div className="App">
        <h1>App component</h1>
        <button onClick={myButtonClickHandler}>Button</button>
        <MyComponent02 stringPar={componentState.parameters[0].stringPar} intPar={componentState.parameters[0].intPar}/>
        <MyComponent02 stringPar={componentState.parameters[1].stringPar} intPar={componentState.parameters[1].intPar}>NodeValue</MyComponent02>
        <MyComponent02 stringPar={componentState.parameters[2].stringPar} intPar={componentState.parameters[2].intPar}/>
      </div>
    );
}

export default AppHooks;