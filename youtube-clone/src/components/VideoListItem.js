import React, { Component } from "react";

export default class VideoListItem extends Component {
  constructor() {
    super() 
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.onVideoSelect(this.props.video)
    console.log('selecting...', this.props.video)
  }
  render() {
    const imageUrl = this.props.video.snippet.thumbnails.default.url;
    return (
      <li onClick={this.handleClick} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img alt="thumbnail of the video" className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{this.props.video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}
