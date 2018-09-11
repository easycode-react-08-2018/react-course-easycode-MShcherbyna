import React, { Component } from 'react';
import './App.css';
import { Header } from "./components/header";
import { Main } from "./components/main";

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: undefined,
            errors: {},
            token: undefined,
            isRedirect: false,
            signUpSuccess: undefined,
            isLogin: false,
            userInfo: []
        }
    }

    sendRequest = (body) => {
        if (!Object.keys(body).length) {
            this.setState({
                errors: {
                    forSignIn: 'Sign In From data inctorect!',
                    forSignUp: 'Sign Up data inctorect!',
                }
            });

            return false;
        }

        let key  = body.email !== undefined ? 'signup' : 'login';
        let self = this;
        fetch('https://flatearth-api.herokuapp.com/api/v1/auth/' + key, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(res => {
                if (res.status === "error") {
                    let errorName = key === 'signup' ? 'forSignUp' : 'forSignIn';
                    this.setState({
                        errors: {
                            [errorName]: res.message
                        }
                    });
                } else {
                    this.setState({
                        errors: {}
                    });

                    if (key === "login") {
                        this.setState({
                            token: res.message.token,
                            isLogin: true,
                            name: res.message.user.name
                        });

                        this.sendSecretRequet();
                    }
                }

                if (key === "signup") {
                    this.setState({
                        isRedirect: true,
                        signUpSuccess: "Sign Up is success"
                    });

                    setTimeout(() =>{
                        this.setState({
                            isRedirect: false,
                            signUpSuccess: undefined
                        });
                    }, 1500);
                }
            });

    }

    sendSecretRequet = () => {
        fetch('https://flatearth-api.herokuapp.com/api/v1/auth/secret', {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.state.token
            }
        }).then(res => res.json()).then(res => {
            let peopleArray = Object.keys(res.message).map(i => res.message[i]);
            //{_id: "595d092eddc5160326b8ad84", name: "admin", email: "oleg.lustenko@gmail.com"}
            this.setState({
                userInfo: res.message
            });
        });
    }
    signOut = () => {
        this.setState({
            isLogin: false
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <Header
                    isLogin  = {this.state.isLogin}
                    signOut  = {this.signOut}
                    userName = {this.state.name}
                />
                <main role="main" className="container auth">
                    <Main
                        sendRequest   = {this.sendRequest}
                        requestError  = {this.state.errors}
                        isRedirect    = {this.state.isRedirect}
                        signUpSuccess = {this.state.signUpSuccess}
                        isLogin       = {this.state.isLogin}
                        userInfo      = {this.state.userInfo}
                    />
                </main>
            </React.Fragment>
        );
    }
}

