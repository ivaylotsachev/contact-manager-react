import React, { Component, Fragment } from 'react';

/* Components */
import Contact from './Contact';

/* Consumer */
import { Consumer } from '../context';

class Contacts extends Component {
  deleteClickHandler = id => {
    console.error('Delete handler', id, Consumer);

    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          return (
            <Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteClickHandler.bind(
                    this,
                    contact.id
                  )}
                />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
