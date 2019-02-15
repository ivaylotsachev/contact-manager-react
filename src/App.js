import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { className } from 'postcss-selector-parser';

/* Components */
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header branding="Contact Manager" />
                <div className="container">
                    <Contact
                        name="John Doe"
                        email="jd@mail.com"
                        phone="55-555-555"
                    />
                </div>
            </div>
        );
    }
}

export default App;
