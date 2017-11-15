import React, { Component } from "react";
import { connect } from "react-redux";

class VideoDetails extends Component {
  render() {
    let video = this.props.video;
    if (!video) {
      video = this.props.videos[0];
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("VideoDetails.js state:", state);
  return {
    videos: state
  };
};

export default connect(mapStateToProps, null)(VideoDetails);
