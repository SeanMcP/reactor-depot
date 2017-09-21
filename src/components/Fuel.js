import React, { Component } from 'react';

export default class Fuel extends Component {
  render() {
    return (
      <main className='p-3'>
        <h4 className='display-4'>Fuel</h4>
        <p>Reactor Depot provides a wide arrange of fuels for your nuclear needs. Please choose from the following:</p>
        <div className='card-deck'>
          <div className='card p-3 m-3'>
            <div className='card-'>
              <h4 className='card-title'>Plutonium</h4>
              <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className='card p-3 m-3'>
            <div className='card-'>
              <h4 className='card-title'>Uranium</h4>
              <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className='card p-3 m-3'>
            <div className='card-'>
              <h4 className='card-title'>Francium</h4>
              <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
