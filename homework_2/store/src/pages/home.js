import React, {Component} from 'react';

export class Home extends Component {

    render() {
        return (
            <div className="container">
            <h1>Main Page</h1>
            <div className="row">
                <button className="btn btn-primary" onClick={this.props.changePageToAdmin}>Login as Admin</button>
                <button className="btn btn-outline-primary" onClick={this.props.changePageToUser}>Login as User</button>
            </div>
            </div>
        );
    }
}
