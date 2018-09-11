import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export class Header extends Component {
    render() {
        if (!this.props.isLogin) {
            return (
                <nav className="navbar navbar-dark bg-primary mb-4">
                    <Link className="navbar-brand" to='/'>Best Recipes</Link>
                    <div>
                        <form className="form-inline my-2 my-lg-0">
                            <Link className="btn  ml-2 my-2 my-sm-0 btn-primary" to='/sign-in'>Sign In</Link>
                            <Link className="btn  ml-2 my-2 my-sm-0 btn-primary" to='/sign-up'>Sign Un</Link>
                        </form>
                    </div>
                </nav>
            );
        } else {
            return (
                <nav className="navbar navbar-dark bg-primary mb-4">
                    <a className="navbar-brand" href="#">Best Recipes</a>
                    <div>
                        <span class="mr-2 user-name">{this.props.userName}</span>
                        <img src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
                            alt="..." className="img-thumbnail rounded-circle pull-left my-2 my-lg-0" width={40} />
                        <button className="btn  ml-2 my-2 my-sm-0 btn-primary" type="button" onClick={this.props.signOut}>Sign out</button>
                    </div>
                </nav>
            );
        }
    }
}