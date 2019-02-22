import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e, dispatch) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    const newContact = { id: uuid(), name, email, phone };

    if (name !== '' && email !== '' && phone !== '') {
      dispatch({ type: 'ADD_CONTACT', payload: newContact });
      this.reset();
    }
  };

  reset() {
    this.setState({ name: '', email: '', phone: '' });
  }

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3 text-left">
              <div className="card-header mb-2">
                <h4>Add Product</h4>
              </div>
              <form onSubmit={e => this.onSubmit(e, dispatch)}>
                <TextInputGroup
                  name="name"
                  value={name}
                  placeholder="Enter name"
                  label="Name"
                  onChange={this.onChange}
                />

                <TextInputGroup
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Enter email"
                  label="Email"
                  onChange={this.onChange}
                />

                <TextInputGroup
                  name="phone"
                  value={phone}
                  placeholder="Enter phone"
                  label="Phone"
                  onChange={this.onChange}
                />

                <div className="px-4 mb-3">
                  <button type="submit" className="btn btn-block btn-dark">
                    Add
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
