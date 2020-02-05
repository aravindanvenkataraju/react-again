import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    const { count } = this.state;
    return (
      <React.Fragment>
        <span
          className={`badge m-2 badge-${count === 0 ? "warning" : "primary"}`}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement = () => {
    console.log(
      "handleIncrement clicked, count from state: " + this.state.count
    );

    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
