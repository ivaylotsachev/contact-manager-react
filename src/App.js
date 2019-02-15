import React, { Component } from 'react';
import './App.css';
import { className } from 'postcss-selector-parser';

/* Components */
import Contact from './components/Contact';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Contact />
            </div>
        );
    }
}

export default App;
