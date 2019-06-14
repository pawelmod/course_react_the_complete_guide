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
  myButtonClickHandler = () =>
  {
    //alert("myButtonClickHandler"); 
    console.log("myButtonClickHandler");
    console.log("this.state.parameters[0].intPar: "+this.state.parameters[0].intPar);

var i = this.state.parameters[0].intPar;
i++;
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
        <button onClick={this.myButtonClickHandler}>Button</button>
        <MyComponent02 
          stringPar={this.state.parameters[0].stringPar} 
          intPar={this.state.parameters[0].intPar}/>

        <MyComponent02 
          stringPar={this.state.parameters[1].stringPar} 
          intPar={this.state.parameters[1].intPar}>NodeValue</MyComponent02>

        <MyComponent02 
          stringPar={this.state.parameters[2].stringPar} 
          intPar={this.state.parameters[2].intPar}
          method={this.myButtonClickHandler}
          />
      </div>

    );
  }
}

export default App;
