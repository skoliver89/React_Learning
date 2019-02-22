import React from 'react';
import ReactDOM from 'react-dom';

// const name = 'Stephen Oliver';
// const element = <h1>Hello, {name}</h1>

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Stephen',
    lastName: 'Oliver'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

//Tutorial Link: https://reactjs.org/docs/introducing-jsx.html