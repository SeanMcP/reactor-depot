import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <main className='p-3'>
        <h4 className='display-4'>Contact</h4>
        <p className='lead'>We would love to hear from you</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <form className='card'>
          <h6 className='card-header text-center'>Contact Form</h6>
          <div className='p-4'>
            <div className="form-group row">
              <label htmlFor="name-input" className="col-2 col-form-label">Name</label>
              <div className="col-10">
                <input placeholder="First and lastname" className="form-control" type="text" value="" id="name-input"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email-input" className="col-2 col-form-label">Email</label>
              <div className="col-10">
                <input placeholder="address@example.com" className="form-control" type="email" value="" id="email-input"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="tel-input" className="col-2 col-form-label">Telephone</label>
              <div className="col-10">
                <input placeholder="X-(XXX) XXX-XXXX" className="form-control" type="tel" value="" id="tel-input"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="text-textarea">Example textarea</label>
              <textarea className="form-control" id="text-textarea" rows="3"></textarea>
            </div>
            <p className='text-right mb-0'>
              <button type="submit" className="btn btn-primary">Submit</button>
            </p>
          </div>
        </form>
      </main>
    );
  }
}
