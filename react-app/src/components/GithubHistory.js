import React, { Component } from 'react';
import PropTypes from 'prop-types';

const divStyle = {
    backgroundColor: "gray"
}

const GithubHistory = (props) => {
    return (
        <div style={divStyle}>
            <h5>GithubHistory Component</h5>
            <ul>
                {props.history.map((record) => {
                    return <li> {record.score} - {record.username} </li>
                })}
            </ul>
        </div>
    )
}
GithubHistory.propTypes = {
    history: PropTypes.array.isRequired
}


export default GithubHistory;