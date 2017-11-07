import React, { Component } from "react";

export default class Choose extends Component {
  constructor(props) {
    super(props);
    this.handleDecision = this.handleDecision.bind(this);
    this.state = {};
  }
  handleDecision() {
    const number = Math.floor(Math.random() * this.props.options.length);
    alert(this.props.options[number]);
  }
  render() {
    return (
      <div>
        <button disabled={!this.props.hasItem} onClick={this.handleDecision}>
          What should i do?
        </button>
        <button disabled={!this.props.hasItem} onClick={this.props.removeAll}>
          Remove All
        </button>
      </div>
    );
  }
}
