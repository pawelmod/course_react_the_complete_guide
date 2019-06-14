import React, { Component } from 'react';
import './App.css';
import MyComponent01 from './MyComponent/MyComponent01';
import MyComponent02 from './MyComponent/MyComponent02';

class App extends Component {

state = {
  parameters:[
      {stringPar:'stringValueAAA' , intPar: 111},
      {stringPar:'stringValueBBB' , intPar: 222},
      {stringPar:'stringValueCCC' , intPar: 333},
  ]
}

  myButtonClickHandler = (intValue) =>
  {
    //alert("myButtonClickHandler"); 
    console.log("myButtonClickHandler");
    console.log("this.state.parameters[0].intPar: "+this.state.parameters[0].intPar);

var i = this.state.parameters[0].intPar;
i = i + intValue;
console.log("i: "+i);

    this.setState(
      {parameters:[
        {stringPar:'stringValueAAA' , intPar: i},
        {stringPar:'stringValueBBB' , intPar: 222},
        {stringPar:'stringValueCCC' , intPar: 333},
    ]}
    );
  }

  render() {
    return (
      <div className="App">
        <h1>App component</h1>
        <button onClick={this.myButtonClickHandler.bind(this,5)}>Button+5 bind</button>
        <MyComponent02 
          stringPar={this.state.parameters[0].stringPar} 
          intPar={this.state.parameters[0].intPar}
          method={() => this.myButtonClickHandler(1)}>+1 arrow function</MyComponent02>

        <MyComponent02 
          stringPar={this.state.parameters[1].stringPar} 
          intPar={this.state.parameters[1].intPar}
          method={() => this.myButtonClickHandler(2)}>+2 arrow function</MyComponent02>

        <MyComponent02 
          stringPar={this.state.parameters[2].stringPar} 
          intPar={this.state.parameters[2].intPar}
          method={this.myButtonClickHandler.bind(this,3)}>+3 bind</MyComponent02>
      </div>

    );
  }
}

export default App;
