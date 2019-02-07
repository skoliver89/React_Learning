import React from 'react';
import ReactDOM from 'react-dom';

function Clock(props) {
    return (
        <div>
            <h1>Hello, World</h1>
            <h2>It is: {props.date.toLocaleTimeString()}</h2>
        </div>
    );
}

//Tutorial Link: https://reactjs.org/docs/state-and-lifecycle.html