import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import axios from 'axios';

import TextInputGroup from '../layout/TextInputGroup';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (e, dispatch) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

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

    const { id } = this.props.match.params;
    const updContact = { name, email, phone };

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    );

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

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
                <h4 className="mb-0">Edit Contact</h4>
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
                    Update
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

export default EditContact;
