import React, { Component } from 'react';

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
    default:
      return state;
  }
};

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'gd@mail.com',
        phone: '111-222-3333'
      },
      {
        id: 2,
        name: 'Katrin Johnson',
        email: 'kartin@mail.com',
        phone: '222-333-44444'
      },
      {
        id: 3,
        name: 'Sam Smith',
        email: 'samsmith@mail.com',
        phone: '444-888-0987'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
