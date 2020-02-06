import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
  };
  render() {
    
    const { value } = this.state;
    return (
      <div>
        <span
          className={`badge m-2 badge-${value === 0 ? "warning" : "primary"}`}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  handleIncrement = () => {
    console.log(
      "handleIncrement clicked, count from state: " + this.state.value
    );

    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
