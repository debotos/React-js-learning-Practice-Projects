import React, { Component } from "react";
import Header from "./components/header";
import Choose from "./components/choose";
import Options from "./components/options";
import Form from "./components/form";

export default class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeAnItem = this.removeAnItem.bind(this);
    this.state = {
      options: ["I have to learn react perfectly at any cost"]
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.options.length !== prevState.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  removeAnItem(item) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => item !== option)
    }));
  }

  removeAll() {
    this.setState({
      options: []
    });
  }

  addItem(item) {
    if (!item) {
      return "Enter valid input";
    } else if (this.state.options.indexOf(item) > -1) {
      return "Options already exists";
    } else {
      this.setState(prevState => ({ options: prevState.options.concat(item) }));
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Choose
          options={this.state.options}
          removeAll={this.removeAll}
          hasItem={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          removeAnItem={this.removeAnItem}
        />
        <Form addItem={this.addItem} />
      </div>
    );
  }
}
