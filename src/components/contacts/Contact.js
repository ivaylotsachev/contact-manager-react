import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  state = {
    show: false
  };

  onShowClick = () => {
    this.setState({ show: !this.state.show });
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (error) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-4">
              <div className="card-header">
                <h6 className="card-title text-left mb-0">
                  <i
                    className="fa fa-sort-down mr-3 mb-0"
                    onClick={() => this.onShowClick(id)}
                  />
                  {name}
                  <i
                    className="fa fa-times pull-right icon-delete mb-0"
                    style={{ fontSize: '12px', color: 'red' }}
                    onClick={() => this.onDeleteClick(id, dispatch)}
                  />
                </h6>
              </div>

              {this.state.show && (
                <div className="card-body text-left">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <b>email:</b> {email}
                    </li>
                    <li className="list-group-item">
                      <b>phone:</b> {phone}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
