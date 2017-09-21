import React, { Component } from 'react';
import data from '../data/data'
import { Link } from 'react-router-dom'

export default class Fuel extends Component {
  render() {
    let fuelRender = data.fuel.map(item => {
      return (
        <div key={item.id} className='card p-3 m-3'>
          <div className='card-'>
            <h4 className='card-title'>{item.name}</h4>
            <h5 className='card-title'>{item.price}</h5>
            <p className='card-text'>{item.desc}</p>
            // FIXME: This link is broken
            <Link to='`/{this.props.match}/{this.id}`'>More info</Link>
          </div>
        </div>
      )
    })
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
