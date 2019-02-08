import React from 'react';
import ReactDOM from 'react-dom';

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
    // Normally would use keys from the data (e.g. from a DB)
    // Only use index if no other option is available (last resort)
        <li key={index}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);

//Tutorial Link: https://reactjs.org/docs/lists-and-keys.html
// Left off at: `Extracting Components with Keys`