import React, { Component } from "react";
import { connect } from "react-redux";
import VideoListItem from "./VideoListItem";

class VideoList extends Component {
  render() {
    const videoItems = this.props.videos
      ? this.props.videos.map(video => {
          return <VideoListItem 
          onVideoSelect = {this.props.onVideoSelect}
          video={video} key={video.etag} />;
        })
      : "";
    return <ul className="col-md-4 list-group">{videoItems}</ul>;
  }
}

const mapStateToProps = state => {
  console.log("VideoList.js state:", state);
  return {
    videos: state
  };
};

export default connect(mapStateToProps, null)(VideoList);
