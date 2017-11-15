import React from "react";
import { connect } from "react-redux";
import _ from 'lodash';

import { getVideos } from '../actions/index'

class SearchBar extends React.Component {
  handleSearch = (event) => {
    let searchText = event.target.value;
    this.videoSearch(searchText)
  }

  videoSearch = _.debounce((searchText = 'react js') => {
    this.props.searchStart(searchText);
  }, 300)

  render() {
    return (
      <div className="search-bar">
        <input type="text" onChange={this.handleSearch} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  searchStart: (searchText) => dispatch(getVideos(searchText))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
