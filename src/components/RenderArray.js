import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Fuel extends Component {
  render() {
    let renderedArray = this.props.array.map(item => {
      return (
        <div key={item.id} className='card p-3 m-3'>
          <div className='card-'>
            <h4 className='card-title'>{item.name}</h4>
            <h5 className='card-title'>{item.price}</h5>
            <p className='card-text'>{item.desc}</p>
            <Link to={`${this.props.data.url}/${item.id}`}>More info</Link>
          </div>
        </div>
      )
    })
    return (
        <div className='card-deck'>
          {renderedArray}
        </div>
    );
  }
}
