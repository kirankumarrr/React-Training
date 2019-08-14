import React, { Component, Fragment } from "react";
import ChildClassCom from "./ChildClassCom";
class Newapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 1,
      inputVal: ""
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    console.log(this.state);
    const { val } = this.state;
    this.setState({ val: val + 1 });
  }
  decrement = () => {
    const { val } = this.state;
    this.setState({ val: val - 1 });
  };
  changeEv = e => {
    console.log(e.target);
    this.setState({ inputVal: e.target.value });
  };
  render() {
    return (
      <>
        <h1>New App 1</h1>
        <h1>{this.state.val}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <hr />
        <br />
        <input value={this.state.inputVal} onChange={this.changeEv} />
        <ChildClassCom InVal={this.state.inputVal} />
      </>
    );
  }
}
export default Newapp;
