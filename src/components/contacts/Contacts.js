import React, { Component, Fragment } from 'react';

/* Components */
import Contact from './Contact';

/* Consumer */
import { Consumer } from '../../context.js';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;

          return (
            <Fragment>
              {contacts.length > 0 ? (
                <h1 className="display-4 mb-4">
                  <span className="text-danger">Contacts </span>List
                </h1>
              ) : (
                <h1 className="display-4 mb-4">
                  <span className="text-danger">No items found </span>
                </h1>
              )}
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
