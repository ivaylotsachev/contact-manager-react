import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import axios from 'axios';

import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (e, dispatch) => {
    e.preventDefault();

    const { name, email, phone } = this.state;
    const newContact = { name, email, phone };

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

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );

    dispatch({ type: 'ADD_CONTACT', payload: res.data });
    this.reset();
    this.props.history.push('/');
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
              <div className="card-header mb-2 py-3">
                <h4 className="mb-0">Add Contact</h4>
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
                  <button type="submit" className="btn btn-block btn-primary">
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
