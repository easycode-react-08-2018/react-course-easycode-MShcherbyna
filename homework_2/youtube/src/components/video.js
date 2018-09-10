import React, { Component } from 'react';

export class Video extends Component {


  render() {
    let videoBlock, details;

    if (this.props.videoData[0] !== undefined) {
        let src         = "https://www.youtube.com/embed/" + this.props.videoData[0].id.videoId;
        videoBlock  = (<iframe title="random" src={src}></iframe>);
        details     = (
            <div className="details">
                <div>{this.props.videoData[0].snippet.channelTitle}</div>
                <div>{this.props.videoData[0].snippet.description}</div>
            </div>
        );
    } else {
        videoBlock = this.props.loader;
    }

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                {videoBlock}
            </div>
            {details}
        </div>
    );
  }
}
