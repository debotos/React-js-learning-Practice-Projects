import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { setRecipes } from "../actions";

class SearchRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: "",
      dish: ""
    };
  }

  search() {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    fetch(url, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => {
        this.props.dispatch(setRecipes(json.results));
      })
  }
  render() {
    return (
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>{" "}
          <FormControl
            type="text"
            placeholder="garlic, chicken"
            onChange={e => this.setState({ ingredients: e.target.value })}
          />
        </FormGroup>{" "}
        <FormGroup>
          <FormControl
            type="text"
            placeholder="adobo"
            onChange={e => this.setState({ dish: e.target.value })}
          />
        </FormGroup>
        {' '}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}


export default connect() (SearchRecipes);