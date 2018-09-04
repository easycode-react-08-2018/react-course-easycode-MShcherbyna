import React, { Component } from 'react';

export class Video extends Component {


  render() {
    let src = "https://www.youtube.com/embed/" + this.props.videoData[0].id.videoId;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="random" src={src}></iframe>
            </div>

            <div className="details">
                <div>{this.props.videoData[0].snippet.channelTitle}</div>
                <div>{this.props.videoData[0].snippet.description}</div>
            </div>
        </div>
    );
  }
}
