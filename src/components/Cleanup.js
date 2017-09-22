import React, { Component } from 'react';
import data from '../data/data'
import { Link } from 'react-router-dom'

export default class Cleanup extends Component {
  render() {
    let cleanupRender = data.cleanup.map(item => {
      return (
        <div key={item.id} className='card p-3 m-3'>
          <div className='card-'>
            <h4 className='card-title'>{item.name}</h4>
            <h5 className='card-title'>{item.price}</h5>
            <p className='card-text'>{item.desc}</p>
            <Link to={`${this.props.match.url}/${item.id}`}>More info</Link>
          </div>
        </div>
      )
    })
    return (
      <main className='p-3'>
        <h4 className='display-4'>Cleanup</h4>
        <p>Reactor Depot provides a wide range of cleanup materials for your nuclear needs. Please choose from the following:</p>
        <div className='card-deck'>
          {cleanupRender}
        </div>
      </main>
    );
  }
}
