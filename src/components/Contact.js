import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      tel: '',
      message: ''
    }
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleTel = this.handleTel.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleName(e) {
    this.setState({name: e.target.value});
  }
  handleEmail(e) {
    this.setState({email: e.target.value});
  }
  handleTel(e) {
    this.setState({tel: e.target.value});
  }
  handleMessage(e) {
    this.setState({message: e.target.value});
  }
  handleSubmit(e) {
    console.log(`Thank you, ${this.state.name}! We'll get back to you in 3-5 business weeks.`)
    this.setState({
      name: '',
      email: '',
      tel: '',
      message: ''
    });
  }
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
                <input onChange={this.handleName} placeholder="Full name" className="form-control" type="text" value={this.state.name} id="name-input"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email-input" className="col-2 col-form-label">Email</label>
              <div className="col-10">
                <input onChange={this.handleEmail} placeholder="address@example.com" className="form-control" type="email" value={this.state.email} id="email-input"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="tel-input" className="col-2 col-form-label">Telephone</label>
              <div className="col-10">
                <input onChange={this.handleTel} placeholder="X-(XXX) XXX-XXXX" className="form-control" type="tel" value={this.state.tel} id="tel-input"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="text-textarea">Example textarea</label>
              <textarea onChange={this.handleMessage} className="form-control" id="text-textarea" rows="3" value={this.state.message}></textarea>
            </div>
            <p className='text-right mb-0'>
              <button onSubmit={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            </p>
          </div>
        </form>
      </main>
    );
  }
}
