import React, { Component } from "react";

import SearchBar from "./SearchBar";
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedVideo: null
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetails video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })}/>
      </div>
    );
  }
}

export default App
