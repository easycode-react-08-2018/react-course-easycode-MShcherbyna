import React, { Component } from 'react';

export class User extends Component {
    render() {
        return (
            <div className="container">
                <h1>USER PAGE</h1>
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                            {
                                this.props.products.map(product => {
                                    let inCart = product.inCart ? (
                                        <div>
                                            <button className="btn btn-light" disabled>Buy</button>
                                            <h3 className="text-success">✓✓✓✓✓</h3>
                                        </div>
                                    ) : (
                                        <a href="#" className="btn btn-primary" onClick={() => this.props.addToCart(product)}>Buy</a>
                                    );
                                     
                                    return (
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <p className="card-texDt">{product.name}</p>
                                                {inCart}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            User
                        </div>
                        <button onClick={this.props.changePageToCart}>Orders</button>
                        <button onClick={this.props.logOut}>User Logout</button>
                    </div>
                </div>
            </div>
        );
    }
}
