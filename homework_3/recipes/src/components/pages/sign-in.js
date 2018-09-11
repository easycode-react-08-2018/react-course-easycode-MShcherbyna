import React, { Component } from 'react';

export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:       undefined,
            password:   undefined,
            errors: {},
        }
    }

    handleInputChange = (event) => {

        const target = event.target;
        const value  = target.value;
        const name   = target.name;

        this.setState({
            [name]: value
        });
    }

    validate = () => {
        let errors = {};
        if (!this.state.password) 
            errors.password = "Email is empty";
        else if (this.state.password < 4)
            errors.password = "Password should be more than 4 symbols";

        if (!this.state.name) 
            errors.name = "Name is empty";
        else if (/[^a-zA-Z0-9_-]/.test(this.state.name))
            errors.name = "Name is incorrect";

        return errors;
    }
    
    sendForm = () => {
        let body = this.validate();

        if (Object.keys(body).length) {
            this.setState({
                errors: body
            });
            return false;
        } else {
            this.setState({
                errors: {}
            });

            body = {
                user: this.state.name,
                password: this.state.password
            };

            this.props.sendRequest(body);
        }
    }
    
    render() {
        return (
            <div className="jumbotron">
                <span className="error-auth">{this.props.requestError}</span>
                <span className="success-auth">{this.props.signUpSuccess}</span>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" name="name" className="form-control" id="exampleInputEmail1" placeholder="Enter Name"  onChange={this.handleInputChange} value={this.state.name} />
                        <small className="error">{this.state.errors.name}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleInputChange} value={this.state.password} />
                        <small className="error">{this.state.errors.password}</small>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.sendForm}>Submit</button>
                </form>
            </div>
        );
    }
}