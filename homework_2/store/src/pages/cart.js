import React, { Component } from 'react';

export class Cart extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1>Shopping Cart</h1>
                        <ul className="list-group">
                            {
                                this.props.products.map(product =>{
                                    return (
                                        <li className="list-group-item">
                                            <img src="#" alt="" />
                                            <a href="#" className="admin-orders__link">
                                            {product.name}
                                            </a>
                                            <h2 className="float-right badge-light">✓</h2>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-4">
                        <div>
                            User
                        </div>
                        <button onClick={this.props.logOut}>User Logout</button>
                    </div>
                </div>
                <div className="row">
                    <pre>price:</pre>
                </div>
                <div className="row">
                    <button className="btn btn-primary">Ship it</button>
                </div>
            </div>
        );
    }
}
