import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Fuel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
    this.handlePurchase = this.handlePurchase.bind(this);
  }
  handlePurchase(e) {
    console.log('e.target.dataset.productid', e.target.dataset.productid);
    this.state.cart.push(e.target.dataset.productid)
    console.log('this.state', this.state);
  }
  render() {
    let renderedArray = this.props.array.map(item => {
      return (
        <div key={item.id} className='card p-3 m-3'>
          <div className='card-'>
            <h4 className='card-title'>{item.name}</h4>
            <h5 className='card-title'>{item.price}</h5>
            <p className='card-text'>{item.desc}</p>
            <ul>
              <li><Link to={`${this.props.data.url}/${item.id}`}>More info</Link></li>
              <li><span onClick={this.handlePurchase} data-productid={item.id}>Add to state</span></li>
              <li><Link to={`${this.props.data.url}/${item.id}/add`}>Dynamic route</Link></li>
            </ul>
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
