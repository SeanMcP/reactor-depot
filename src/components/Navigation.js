import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <span className="h1 navbar-brand mb-0">Categories</span>
        <NavLink activeClassName='selected' className='nav-link' to='/fuel'>Fuel</NavLink>
        <NavLink activeClassName='selected' className='nav-link' to='/parts'>Parts</NavLink>
        <NavLink activeClassName='selected' className='nav-link' to='/cleanup'>Cleanup</NavLink>
      </nav>
    );
  }
}
