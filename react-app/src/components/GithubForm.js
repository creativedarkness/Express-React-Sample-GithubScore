import React, { Component } from 'react';
import PropTypes from 'prop-types';

const divStyle = {
    backgroundColor: "gray"
}

class GithubForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.retrieveUsername(this.state.username);
        this.setState({ username: "" })
    }

    render() {
        return (
            <div style={divStyle}>
                <h5>GithubForm Component</h5>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input type="submit" />
                </form>
            </div>

        )
    }
}
GithubForm.propTypes = {
    retrieveUsername: PropTypes.func.isRequired,
}

export default GithubForm