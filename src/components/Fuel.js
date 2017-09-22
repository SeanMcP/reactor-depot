import React, { Component } from 'react';
import data from '../data/data'
import RenderArray from './RenderArray'

export default class Fuel extends Component {
  render() {
    return (
      <main className='p-3'>
        <h4 className='display-4'>Fuel</h4>
        <p>Reactor Depot provides a wide range of fuels for your nuclear needs. Please choose from the following:</p>
        <RenderArray data={this.props.match} array={data.fuel}/>
      </main>
    );
  }
}
