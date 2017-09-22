import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data';

export default class Item extends Component {
  render() {
    let params = this.props.match.params
    let cat = params.cat
    let id = params.id;
    // console.log('data[cat]', data[cat]);
    let sortedArray = data[cat].filter(function (element) {
        return element.id === id;
    });
    let item = sortedArray[0];
    // console.log('item', item);
    return (
      <main className='p-3'>
        <div className='row'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={`/`}>Home</Link></li>
            <li className="breadcrumb-item" style={{textTransform: 'capitalize'}}><Link to={`/${cat}`}>{cat}</Link></li>
            <li className="breadcrumb-item active">{item.name}</li>
          </ol>
        </div>
        <div className='row my-3'>
          <div className='col'>
            <h4 className='display-4'>{item.name}</h4>
            <h3 className='my-2'>${item.price}</h3>
            <p className='my-2'>{item.desc}</p>
          </div>
          <div className='col-4'>
            <img src={item.imageurl} alt={item.name} style={{width: '100%'}} className='rounded'/>
          </div>
        </div>
      </main>
    );
  }
}
