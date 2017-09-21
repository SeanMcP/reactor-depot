import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <NavLink to='/'><h1>Reactor Depot</h1></NavLink>
          <h4>For all your nuclear needs</h4>
        </div>
        <nav>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </header>
    );
  }
}
