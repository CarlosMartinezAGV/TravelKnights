import React, { Component } from "react";

class Counter extends Component {
  state = { count: 1 };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;
