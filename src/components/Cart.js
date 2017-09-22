import React, { Component } from 'react';
import data from '../data/data';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
  }
  render() {
    let params = this.props.match.params
    let cat = params.cat
    let id = params.id;
    let cartItem = {};
    cartItem[cat] = id;
    this.state.cart.push(cartItem);
    console.log('this.state.cart', this.state.cart);
    // console.log('cat', cat);
    // console.log('data[cat]', data[cat]);
    return (
      <main className='p-3'>
        <h4 className='display-4'>Cart</h4>
        <p className=''>Ready to checkout?</p>
      </main>
    );
  }
}
