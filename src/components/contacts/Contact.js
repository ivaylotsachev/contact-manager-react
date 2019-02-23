import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
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
                <div className="title">
                  <i
                    className="fa fa-sort-down mr-3 mb-0"
                    onClick={() => this.onShowClick(id)}
                  />
                  <h6 className="card-title text-left mb-0">{name}</h6>
                </div>
                <div className="action">
                  <Link to={`contact/edit/${id}`} className="pull-right">
                    <i
                      className="fas fa-pencil-alt pull-right mr-2"
                      style={{ fontSize: '14px', color: 'black' }}
                    />
                  </Link>
                  <i
                    className="fas fa-times pull-right icon-delete mb-0"
                    style={{ fontSize: '14px', color: 'red' }}
                    onClick={() => this.onDeleteClick(id, dispatch)}
                  />
                </div>
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
