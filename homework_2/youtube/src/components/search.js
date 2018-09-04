import React, { Component } from 'react';

export class Search extends Component {


  render() {
    return (
        <div class="search-bar navbar">
            <input type="text" placeholder="Search" onChange={this.props.getVideoName} />
        </div>
    );
  }
}
