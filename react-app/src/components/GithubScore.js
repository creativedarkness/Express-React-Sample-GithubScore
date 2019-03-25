import React, { Component } from 'react';
import axios from 'axios';

import "./Github.css";
import GithubForm from './GithubForm';
import GithubDisplay from './GithubDisplay';
import GithubHistory from './GithubHistory';

class GithubScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: "",
            message: "",
            history: [
            ]
        }
    }

    retrieveUsername = (username) => {

        // this.setState({ score: 123, message: null })
        // this.setState({ score: null, message: "Invalid Username, try again." })

        axios
        .get(`http://localhost:1337/score/${username}`)
        .then( (response) => {
            if(response.data.status) {
                this.setState({ 
                    score: response.data.score, 
                    message: null,
                    history: response.data.history
                })
            } else {
                this.setState({ 
                    score: null, 
                    message: "Invalid Username, try again.",
                    history: response.data.history
                })
            }
        })

    }

    render() {
        return (
            <div>
                <h5>GithubScore Component</h5>
                <GithubForm
                    retrieveUsername={this.retrieveUsername}
                />
                <GithubDisplay
                    score={this.state.score}
                    message={this.state.message}
                />
                <GithubHistory 
                    history={this.state.history} 
                />
            </div>
        )
    }
}

export default GithubScore;
