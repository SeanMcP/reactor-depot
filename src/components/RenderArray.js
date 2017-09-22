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
        <div key={item.id} className='card m-3'>
          <Link to={`${this.props.data.url}/${item.id}`}>
            <div className='card-img-top' style={{backgroundImage: `url(${item.imageurl})`, backgroundPosition: 'center', backgroundSize: 'cover', height: 200}}></div>
          </Link>
          <div className='card-block p-3'>
            <h4 className='card-title'>{item.name}</h4>
            <h5 className='card-title'>${item.price}</h5>
            <p className='card-text'>{item.desc}</p>
            <Link to={`${this.props.data.url}/${item.id}`} className='card-link'>More info</Link>
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
