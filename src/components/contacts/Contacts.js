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
