import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
