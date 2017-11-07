import React from "react";
import { Form, Button, Input } from "reactstrap";

import "../styles/App.css";
import ShowAge from "./ShowAge";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      newDate: "",
      birthday: "1997-01-12",
      show: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      show: true,
      birthday: this.state.newDate
    });
    console.log(this.state.birthday);
  }

  render() {
    return (
      <div className="App">
        <h2>Input your Birthday!</h2>
        <Form className="form">
          <Input
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
          />{" "}
          <Button onClick={this.handleSubmit} className="btn-info">
            Calculate
          </Button>
        </Form>
        {this.state.show ? 
          <div className="fade age-status">
            <ShowAge birthday={this.state.birthday} /> 
          </div> 
        : ""}
      </div>
    );
  }
}

export default App;
