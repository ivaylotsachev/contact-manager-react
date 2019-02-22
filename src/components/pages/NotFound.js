import React from 'react';

const NotFound = props => {
  return (
    <div>
      <h4 className="display-4">
        <span className="text-danger">404</span> Page not found
      </h4>
      <p className="lead">Sorry, this page does not exist</p>
      <button
        className="btn btn-outline-dark"
        onClick={() => props.history.push('/')}
      >
        Back to home :)
      </button>
    </div>
  );
};

export default NotFound;
