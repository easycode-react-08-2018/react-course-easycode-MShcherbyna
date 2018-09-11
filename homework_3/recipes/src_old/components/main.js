import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { Home } from "./pages/home";
import { Users } from "./pages/users"

export class Main extends Component {
    render() {

        return (
            <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/users/" render={() =>(
                    this.props.isLogin ? (
                        <Users />
                    ) : (
                        <Redirect to="/sign-in/" />
                    )
                )} />
                <Route path="/sign-in/" render={() => (
                    this.props.isLogin ? (
                        <Redirect to="/users/" />
                    ) : (
                        <SignIn
                            sendRequest     = {this.props.sendRequest}
                            requestError    = {this.props.requestError.forSignIn}
                            signUpSuccess   = {this.props.signUpSuccess}
                        />
                    )
                )}/>
                <Route exact path="/sign-up/" render={() => (
                    this.props.isRedirect ? (
                        <Redirect to="/sign-in/" />
                    ) : (
                        <SignUp
                            sendRequest  = {this.props.sendRequest}
                            requestError = {this.props.requestError.forSignUp}
                        />
                    )
                )} />
            </React.Fragment>
        );
    }
}