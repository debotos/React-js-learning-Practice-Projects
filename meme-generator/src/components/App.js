import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/index.css";
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import MyMemes from "./MyMemes";
import MemeItem from "./MemeItem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memeLimit: 10,
      text0: "",
      text1: ""
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to the Meme Generator!</h2>
        <MyMemes />
        <h4>Write Some Text</h4>
        <Form inline>
          <FormGroup>
            <ControlLabel>Top Text</ControlLabel>{" "}
            <FormControl
              type="text"
              onChange={event =>
                this.setState({
                  text0: event.target.value
                })}
            />
          </FormGroup>
          {'   '}
          <FormGroup>
            <ControlLabel>Bottom Text</ControlLabel>{" "}
            <FormControl
              type="text"
              onChange={event => {
                this.setState({
                  text1: event.target.value
                });
              }}
            />
          </FormGroup>
        </Form>
        {this.props.memes
          .slice(0, this.state.memeLimit)
          .map((meme, index) => (
            <MemeItem
              key={index}
              meme={meme}
              text0={this.state.text0}
              text1={this.state.text1}
            />
          ))}
        <div
          className="meme-button"
          onClick={() => {
            this.setState(prevState => {
              return {
                memeLimit: prevState.memeLimit + 10
              };
            });
          }}
        >
          Load 10 more memes...
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(App);
