import React, { Component } from 'react';
import Header from './Header'
import Navigation from './Navigation'
import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
