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

    return (
      <div className="App">
        <h1>App component</h1>
        {/*<button onClick={this.myButtonClickHandler}>Button</button>*/}
        <MyComponent02 stringPar={this.state.parameters[0].stringPar} intPar={this.state.parameters[0].intPar}/>
        <MyComponent02 stringPar={this.state.parameters[1].stringPar} intPar={this.state.parameters[1].intPar}>NodeValue</MyComponent02>
        <MyComponent02 stringPar={this.state.parameters[2].stringPar} intPar={this.state.parameters[2].intPar}/>
      </div>
    );
}

export default AppHooks;