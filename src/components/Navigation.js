import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <NavLink to='/fuels'>Fuels</NavLink>
        <NavLink to='/parts'>Parts</NavLink>
        <NavLink to='/cleanup'>Cleanup</NavLink>
      </nav>
    );
  }
}
