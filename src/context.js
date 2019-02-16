import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'gd@mail.com',
        phone: '555 - 55 - 55'
      },
      {
        id: 2,
        name: 'Stanka Evalarova',
        email: 'stanka@mail.com',
        phone: '22 - 33 - 55'
      },
      {
        id: 3,
        name: 'Mitko Mitrele',
        email: 'mitrele@mail.com',
        phone: '33 - 3333 - 333'
      }
    ]
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
