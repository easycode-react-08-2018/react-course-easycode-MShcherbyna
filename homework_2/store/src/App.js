import React, {Component} from 'react';

import './App.css';

import {Home} from './pages/home';
import {User} from './pages/user';
import {Admin} from './pages/admin';
import {Cart} from './pages/cart';

export class App extends Component {

    products = [
        {
            name: 'MacBook pro 2018',
            inCart: false
        },
        {
            name: 'Dell xs',
            inCart: false
        },
        {
            name: 'Microsoft Surface',
            inCart: false
        }
    ]

    constructor() {
        super();

        this.state = {
            activePage: 'homePage',
            products:   this.products,
            newProduct: '',
            inCart: []
        }
    }

    changePageToAdmin = () => {
        this.setState({
            activePage: 'adminPage'
        });
    }

    changePageToUser = () => {
        this.setState({
            activePage: 'userPage'
        });
    }

    changePageToCart = () => {
        this.setState({
            activePage: 'cartPage'
        });
    }

    logOut = () => {
        this.setState({
            activePage: 'homePage'
        });
    }

    addProduct = () => {
        this.state.products.push({name: this.state.newProduct})

        this.setState({
            products: this.state.products,
            newProduct: ''
        })
    }
  
    addProductName = (event) => {
        this.setState({
            newProduct: event.target.value
        })
    }

    addToCart = (product) => {
        let self = this;
        let item = this.state.products.find(function(item, index){
            if (item.name == product.name) {
                self.state.products[index].inCart = true;
                self.setState({
                    products: self.state.products
                });

                return item;
            }
        });

        this.state.inCart.push(item);

        this.setState({
            inCart: this.state.inCart
        });
    }

    render() {
        const {
            activePage,
        } = this.state;

        if (activePage == 'homePage' ) {
            return (<Home 
                changePageToAdmin = {this.changePageToAdmin}
                changePageToUser  = {this.changePageToUser}
            />)
        }

        if (activePage === 'adminPage' ) {
            return (<Admin 
                logOut              = {this.logOut}
                products            = {this.state.products}
                addProduct          = {this.addProduct}
                addProductName      = {this.addProductName}
                productName         = {this.state.newProduct}
                changePageToCart    = {this.changePageToCart}
            />)
        }

        if (activePage === 'userPage' ) {
            return (<User 
                logOut           = {this.logOut}
                products         = {this.state.products}
                changePageToCart = {this.changePageToCart}
                addToCart        = {this.addToCart}

            />)
        }

        if (activePage === 'cartPage' ) {
            return (<Cart 
                products = {this.state.inCart}
                logOut   = {this.logOut}
            />)
        }
    }
}
