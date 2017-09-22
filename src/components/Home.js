import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <main className=''>
        <div className='jumbotron jumbotron-fluid p-5 rounded-bottom' style={{backgroundImage: "url('https://images.unsplash.com/photo-1468787737698-f5c03f0570dd')", backgroundPosition: 'center', backgroundSize: 'cover', color: 'white'}}>
          <h1 className='display-3'>We are Reactor Depot</h1>
          <p className='lead'>Reactor Depot is the leading source for nuclear products and materials around the world.</p>
          <hr className='my-4'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Reactor Depot is trending in:</p>
          <ul>
            <li>North Korea</li>
            <li>Iran</li>
          </ul>
          <p className='lead'>
            <Link className='btn btn-primary btn-lg' to={'/about'} role='button'>Learn more</Link>
          </p>
        </div>
      </main>
    );
  }
}
