import React, { Component } from 'react';

export class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:       undefined,
            email:      undefined,
            password:   undefined,
            confirm:    undefined,
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

        if (!this.state.email) 
            errors.email = "Email fields is empty";
        else if (!((this.state.email.indexOf(".") > 0) && (this.state.email.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(this.state.email))
            errors.email = "Email is incorrect";

        if (!this.state.password) 
            errors.password = "Password is empty";
        else if (this.state.password < 3)
            errors.password = "Password should be more than 3 symbols";

        if (!this.state.confirm) 
            errors.confirm = "Confirm password is empty";
        else if (this.state.password != this.state.confirm)
            errors.confirm = "Confirm password != password";

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
                email: this.state.email,
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
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="Enter Email" onChange={this.handleInputChange} value={this.state.email} />
                        <small className="error">{this.state.errors.email}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control"  id="exampleInputPassword1" placeholder="Password" 
                         name="password" onChange={this.handleInputChange} value={this.state.password} />
                        <small className="error">{this.state.errors.password}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Confirm Password" name="confirm" onChange={this.handleInputChange} value={this.state.confirm} />
                        <small className="error">{this.state.errors.confirm}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter Name" 
                        name="name" onChange={this.handleInputChange} value={this.state.name} />
                        <small className="error">{this.state.errors.name}</small>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.sendForm}>Submit</button>
                </form>
            </div>
        );
    }
}