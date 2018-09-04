import React, { Component } from 'react';

export class List extends Component {


  render() {
    let videoData = this.props.videoData.slice(1);
    console.log(videoData);
    return (
      <ul className="col-md-4 list-group">
      {
        videoData.map(video => {
          return (
            <li className="list-group-item">
              <div className="video-list media">
                  <div className="video-list media">
                      <div className="media-left">
                          <img className="media-object" src={video.snippet.thumbnails.default.url} />
                      </div>
                  </div>
                  <div className="media-body">
                      <div className="media-heading">{video.snippet.channelTitle}</div>
                  </div>
              </div>
            </li>
          )
        })
      }
      </ul>
    );
  }
}
