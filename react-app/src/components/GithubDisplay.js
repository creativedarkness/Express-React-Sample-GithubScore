import React, { Component } from 'react';
import PropTypes from 'prop-types';

const divStyle = {
    backgroundColor: "gray"
}

const GithubDisplay = (props) => {
    return (
        <div style={divStyle}>
            <h5>GithubDisplay Component</h5>
            <h3>{props.score}</h3>
            <h3>{props.message}</h3>
        </div>
    )
}
GithubDisplay.propTypes = {
    score: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

export default GithubDisplay;