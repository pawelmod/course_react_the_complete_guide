import React, { Component } from 'react';
import './App.css';
import MyComponent01 from './MyComponent/MyComponent01';
import MyComponent02 from './MyComponent/MyComponent02';

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>App component</h1>
        <MyComponent02 stringPar="stringValueAAA" intPar="intValue111"/>
        <MyComponent02 stringPar="stringValueBBB" intPar="intValue222"></MyComponent02>
        <MyComponent02 stringPar="stringValueCCC" intPar="intValue333"/>
      </div>

    );
  }
}

export default App;
