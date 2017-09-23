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
          <p>From fussion to fission, Reactor Depot prides itself in providing the highest quality nuclear products at competitive prices. Whether you are exploring alternative energy sources or just looking to build your arsenal, Reactor Depot the one-stop-shop for all your nuclear needs.</p>
          <p>Reactor Depot has been feature in: The North Korea Times (PRK) and The Tehran Times (IRN)</p>
          <p className='lead'>
            <Link className='btn btn-primary btn-lg' to={'/about'} role='button'>Learn more</Link>
          </p>
        </div>
      </main>
    );
  }
}
