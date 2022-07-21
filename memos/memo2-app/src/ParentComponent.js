import React, { Component } from "react";
import ChildCompo from "./ChildCompo";
import ChildCompo2 from "./ChildCompo2";

export class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    setInterval(this.cont, 1000);
    console.log("componentDidMount");

  }

  cont = () => {
    let k = this.state.count + 1;
    this.setState({
      count: k,
    });
  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <p>{this.state.count} </p>

        <ChildCompo />

        <ChildCompo2 c={this.state.count}/>
      </div>
    );
  }
}

export default ParentComponent;
