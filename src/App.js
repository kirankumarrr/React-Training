import React, { Component } from "react";
import Child from "./child";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pro: "React",
      number: 1,
      childName: "ChildReact"
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    let { number } = this.state;
    this.setState({ number: number + 1 });
  }
  //Arrow function
  decrement = () => {
    let { number } = this.state;
    if (number > 0) {
      //this.setState({ number: number - 1 });
      this.setState(prevState => ({ number: prevState.number - 1 }));
    }
  };
  childFunction = () => {
    let { number } = this.state;
    console.log("Child Component Event Triggered");
    this.setState({ number: number + 1 });
  };
  render() {
    const { pro, number, childName } = this.state;
    return (
      <div className="App">
        <h1>State and Props</h1>
        <h2>{pro}</h2>
        <div>
          <h2>{number}</h2>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
        <Child ChildReact={childName} childFunction={this.childFunction} />
      </div>
    );
  }
}

export default App;
