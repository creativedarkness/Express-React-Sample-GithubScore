import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GithubScore from './components/GithubScore';

class App extends Component {
    render() {
        return (
            <div className="App">
                <GithubScore/>
            </div>
        );
    }
}

export default App;
