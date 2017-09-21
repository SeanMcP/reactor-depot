import React, { Component } from 'react';
import data from '../data/data'

export default class Fuel extends Component {
  render() {
    let fuelRender = data['fuel'].map(item => {
      return (
        <div className='card p-3 m-3'>
          <div className='card-'>
            <h4 className='card-title'>{item.name}</h4>
            <h4 className='card-title'>{item.price}</h4>
            <p className='card-text'>{item.desc}</p>
          </div>
        </div>
      )
    })
    console.log('data[fuel]', data['fuel']);
    return (
      <main className='p-3'>
        <h4 className='display-4'>Fuel</h4>
        <p>Reactor Depot provides a wide arrange of fuels for your nuclear needs. Please choose from the following:</p>
        <div className='card-deck'>
          {fuelRender}
        </div>
      </main>
    );
  }
}
