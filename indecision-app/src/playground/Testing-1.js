import React, { Component } from "react";
import "./App.css";

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyby: 2,
  multiply() {
    return this.numbers.map(number => {
      //JSX inside the JSX example
      return <p key={number}>{number * this.multiplyby}</p>; //This return will create a map
    });
  }
};

class App extends Component {
  render() {
    return <div className="App">{multiplier.multiply()}</div>;
  }
}
export default App;
