import React, { Component } from 'react';

export class Users extends Component {
    render() {
        return (
            <div>
                {
                    Object.keys(this.props.userInfo).map(i => {
                        return (
                            <div className="alert alert-secondary">
                                <p>Name: {this.props.userInfo[i].name}</p>
                                <p>Email: {this.props.userInfo[i].email}</p>
                            </div>
                        )
                    })      
                }
            </div>
        );
    }
}