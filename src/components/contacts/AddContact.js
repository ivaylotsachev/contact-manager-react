import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e, dispatch) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    const newContact = { id: uuid(), name, email, phone };

    /* Check for errors */
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Name is required' } });
      return;
    }

    dispatch({ type: 'ADD_CONTACT', payload: newContact });
    this.reset();
  };

  reset() {
    this.setState({ name: '', email: '', phone: '', errors: {} });
  }

  render() {
    const { name, email, phone, errors } = this.state;

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
                  error={errors.name}
                />

                <TextInputGroup
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Enter email"
                  label="Email"
                  onChange={this.onChange}
                  error={errors.email}
                />

                <TextInputGroup
                  name="phone"
                  value={phone}
                  placeholder="Enter phone"
                  label="Phone"
                  onChange={this.onChange}
                  error={errors.phone}
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
