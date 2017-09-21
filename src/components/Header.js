import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className='d-flex justify-content-between'>
        <div className='col-8'>
          <NavLink to='/'><h1>Reactor Depot</h1></NavLink>
          <h4>For all your nuclear needs</h4>
        </div>
        <nav className='col-4 row justify-content-end'>
          <NavLink activeClassName='selected' className='btn btn-outline-primary align-self-center p-2 mr-3' to='/about'>About</NavLink>
          <NavLink activeClassName='selected' className='btn btn-outline-primary align-self-center p-2 mr-3' to='/contact'>Contact</NavLink>
        </nav>
      </header>
    );
  }
}
