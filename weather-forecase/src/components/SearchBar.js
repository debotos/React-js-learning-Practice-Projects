import React from "react";
import { connect } from "react-redux";

import { fetchWeather } from "../actions/index";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("searching weather for -> ", this.state.searchText);
    // Fetch the weather
    this.props.fetchData(this.state.searchText);
    this.setState({ searchText: "" });
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Get a five-day forecast in your favorite cities(ex: khulna, BD)☻"
          className="form-control"
          value={this.state.searchText}
          onChange={this.handleInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: location => {
    dispatch(fetchWeather(location));
  }
});

// Below is an alternative method of mapDispatchToProps
// import { bindActionCreators } from "redux";
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchWeather }, dispatch);
// }
// Now call, this.props.fetchWeather(this.state.serachText)

export default connect(null, mapDispatchToProps)(SearchBar);
