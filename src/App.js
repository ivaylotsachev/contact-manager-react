import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { className } from 'postcss-selector-parser';

/* Provider */
import { Provider } from './context';

/* Components */
import Contacts from './components/Contacts';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
