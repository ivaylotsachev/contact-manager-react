import React, { Component } from 'react';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    show: true
  };

  onShowClick = () => {
    this.setState({ show: !this.state.show });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3 text-left">
              <h4 className="text-left">
                {name}
                <i
                  className="fa fa-sort-down ml-2"
                  onClick={() => this.onShowClick(id)}
                />
                <i
                  className="fa fa-times pull-right icon-delete"
                  style={{ fontSize: '12px', color: 'red' }}
                  onClick={() => this.onDeleteClick(id, dispatch)}
                />
              </h4>
              {this.state.show && (
                <ul className="list-group">
                  <li className="list-group-item">
                    <b>email:</b> {email}
                  </li>
                  <li className="list-group-item">
                    <b>phone:</b> {phone}
                  </li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
