import React, { Component } from 'react';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';
// import ClipLoader from 'react-spinners/ClipLoader';

import './App.css';
import YTSearch from 'youtube-api-search';

import { Search } from './components/search';
import { Video } from './components/video';
import { List } from './components/list';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export class App extends Component {


    constructor() {
        super();

        this.state = {
            videoData: [],
            loading: true
        }
    }

    getVideoName = (event) => {
        this.getVideo(event.target.value)
    }

    getVideo = (name) => {
        YTSearch({ key: API_KEY, term: name }, data => {
            this.setState({
                videoData: data,
                loading: false
            });
        });
    }

    changeVideo = (video, index) => {
        delete this.state.videoData[index + 1];
        this.state.videoData.unshift(video);

        this.setState({
            videoData: this.state.videoData
        });
    }

    render() {
        const isLoggedIn = this.state.loading;

        let statrBlokc;

        if (isLoggedIn) {
            statrBlokc = (
                <div className="video-detail col-md-8">
                    <ClipLoader
                        className={override}
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>
            )
        } else {
            statrBlokc = <Video
                videoData={this.state.videoData}
                loader={
                    <ClipLoader
                        className={override}
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                }
            />
        }

        return (
            <main className="container">
                <Search
                    getVideoName={this.getVideoName}
                />
                <div className="row">
                    {statrBlokc}
                    <List
                        videoData={this.state.videoData}
                        changeVideo={this.changeVideo}
                    />
                </div>
            </main>
        );
    }
}
