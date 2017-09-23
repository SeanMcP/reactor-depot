import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <main className='p-3'>
        <h4 className='display-4'>About</h4>
        <p className='lead'>It all started with two guys and a garage</p>
        <img className='float-right rounded ml-4 mb-4' alt='Hewlitt Packard' src='https://i.pinimg.com/736x/77/17/63/771763c3cb784edc4a52deab4af26ef5--bill-hewlett-hewlett-packard.jpg' style={{width: '33.333%'}}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <blockquote className='blockquote'>
          <p className='mb-0'>What began as a hobby turned into a passion</p>
          <footer className='blockquote-footer'>Richard Manhattan in <cite title="Source Title">Don't Overreact (HarperCollins, 2006)</cite></footer>
        </blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </main>
    );
  }
}
