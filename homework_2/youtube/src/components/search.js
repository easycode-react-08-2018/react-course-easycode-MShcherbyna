import React, { Component } from 'react';
import {debounce} from 'debounce';

export class Search extends Component {

    debounceEvent = (...args) => {
        this.debouncedEvent = debounce(...args);
        return e => {
            e.persist();
            return this.debouncedEvent(e);
        };
    }

    render() {
        return (
            <div class="search-bar navbar">
                <input type="text" placeholder="Search" onChange={this.debounceEvent(this.props.getVideoName, 300)} />
            </div>
        );
    }
}
