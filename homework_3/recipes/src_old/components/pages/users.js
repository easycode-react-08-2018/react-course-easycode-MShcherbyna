import React, { Component } from 'react';

export class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:       undefined,
            password:   undefined,
        }
    }

    render() {
        console.log(this.props.userInfo);
        return (
            <div>
               <h1>Users</h1>
            </div>
        );
    }
}