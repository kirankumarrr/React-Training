import React, { Component } from "react";
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("contructor");
    this.state = {
      number: 1
    };
    this.increment = this.increment.bind(this);
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
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

  componentWillReceiveProps() {
    console.log("Updating.....");
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate() {
    console.log("Updating.....");
    console.log("shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <h1>State and Props</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default LifeCycle;
