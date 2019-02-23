import React, { Component } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    case 'UPDATE_CONTACT':
      let { contacts } = state;
      let index = contacts.findIndex(el => el.id === action.payload.id);

      let updatedContacts = [
        ...contacts.splice(0, index),
        action.payload,
        ...contacts.splice(index + 1)
      ];

      return {
        ...state,
        contacts: updatedContacts
      };

    default:
      return state;
  }
};

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
