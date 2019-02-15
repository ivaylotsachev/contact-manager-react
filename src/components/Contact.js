import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const { name, email, phone } = this.props;

        return (
            <div className="card card-body mb-3">
                <h4 className="text-left">{name}</h4>
                <ul className="list-group">
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{phone}</li>
                </ul>
            </div>
        );
    }
}

export default Contact;
