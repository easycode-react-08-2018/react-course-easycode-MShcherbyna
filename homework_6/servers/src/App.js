import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Servers} from './features/servers/servers';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Servers />
      </div>
    );
  }
}