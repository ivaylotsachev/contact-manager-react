import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-between mb-3">
      <div className="container">
        <span href="" className="navbar-brand">
          {branding}
        </span>
        <div>
          <ul className="navbar navbar-nav mr-auto">
            <NavLink
              to="/"
              className="nav-link"
              exact
              activeClassName="is-active"
            >
              Home
            </NavLink>

            <NavLink
              to="/contact/add"
              className="nav-link"
              activeClassName="is-active"
            >
              Add Contact
            </NavLink>

            <NavLink
              to="/about"
              className="nav-link"
              activeClassName="is-active"
            >
              About
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
