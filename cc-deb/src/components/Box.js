import React, { Component } from "react";
import converter from "google-currency";

import RaisedButton from "material-ui/RaisedButton";
import Snackbar from "material-ui/Snackbar";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/social/person";
import { Card } from "material-ui/Card";

import data from "../data/countries.json";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
      from: "USD",
      to: "BDT",
      buttonState: true,
      showOrNot: false,
      toast: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.calculator = this.calculator.bind(this);
  }
  // handleInput() Function
  handleInput(e) {
    this.setState({ showOrNot: false });
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ input: amount });
      this.setState({ output: "" });
      const from = this.state.from;
      const to = this.state.to;
      if (amount > 0) {
        this.setState({ buttonState: false });
      } else {
        this.setState({ buttonState: true });
      }
      this.calculator(from, to, amount);
    }
  }
  // Handle From
  handleFrom = e => {
    this.setState({ from: e.target.value });
    this.setState({ output: "" });
    const from = e.target.value;
    const to = this.state.to;
    const money = this.state.input;
    this.calculator(from, to, money);
  };
  // Handle To
  handleTo = e => {
    this.setState({ to: e.target.value });
    this.setState({ output: "" });
    const from = this.state.from;
    const to = e.target.value;
    const money = this.state.input;
    this.calculator(from, to, money);
  };
  // Handle Submit
  handleSubmit = () => {
    this.setState({ showOrNot: true });
    this.setState({ toast: true });
  };
  // calculator() Function
  calculator(from, to, amount) {
    const options = { from, to, amount };
    const response = converter(options);
    response.then(value => {
      console.log("calculator()", value);
      this.setState({ output: value.converted });
    });
  }
  // Render select options
  renderCountriesOption = () => {
    let result = "";
    let countries = data.results;
    for (var p in countries) {
      if (countries.hasOwnProperty(p)) {
        if (countries[p].hasOwnProperty("currencySymbol")) {
          const name = countries[p].currencyName;
          const id = countries[p].id;
          const symbol = countries[p].currencySymbol;
          result += `<option value="${id}"> ${name} (code: ${id}; sign: ${
            symbol
          })</option>\n`;
        } else {
          const name = countries[p].currencyName;
          const id = countries[p].id;
          result += `<option value="${id}">${name} (code: ${id})</option>\n`;
        }
      }
    }
    return result;
  };
  // Snackbar close
  handleRequestClose = () => {
    this.setState({
      toast: false
    });
  };

  render() {
    return (
      <div className="container">
        <Card className="first-card">
          <label htmlFor="input-main">Amount of currency here to convert</label>
          <input
            id="input-main"
            className="text-box"
            type="number"
            placeholder="Amount of currency here"
            value={this.state.input}
            onChange={this.handleInput}
          />
        </Card>

        <Card className="middle-card">
          <label htmlFor="from">From this currency</label>
          <select
            id="from"
            className="select"
            dangerouslySetInnerHTML={{
              __html: this.renderCountriesOption()
            }}
            onChange={this.handleFrom}
            value={this.state.from}
          />

          <label id="toLable" htmlFor="to">
            To this currency
          </label>
          <select
            id="to"
            className="select"
            dangerouslySetInnerHTML={{
              __html: this.renderCountriesOption()
            }}
            value={this.state.to}
            onChange={this.handleTo}
          />

          <RaisedButton
            style={{ marginTop: 10, height: 48 }}
            primary={true}
            disabled={this.state.buttonState}
            className="submit-button"
            onClick={this.handleSubmit}
          >
            Submit
          </RaisedButton>
        </Card>

        <Card className="last-card">
          <div className="output">
            {this.state.showOrNot ? (
              <h1>
                {this.state.input} {this.state.from} = {this.state.output}{" "}
                {this.state.to}
              </h1>
            ) : (
              <h1>
                {this.state.input} {this.state.from} = {"?"} {this.state.to}
              </h1>
            )}
          </div>
        </Card>

        <FloatingActionButton
          style={{
            float: "right",
            marginTop: "auto",
            marginLeft: 20
          }}
          href="https://github.com/debotos"
        >
          <ContentAdd />
        </FloatingActionButton>

        <Snackbar
          style={{ textAlign: "center" }}
          open={this.state.toast}
          message={
            this.state.output !== "" && (
              <h3>
                {this.state.input} {this.state.from} = {this.state.output}{" "}
                {this.state.to} &hearts;
              </h3>
            )
          }
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}
