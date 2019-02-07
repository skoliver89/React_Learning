import React from 'react';
import ReactDOM from 'react-dom';

// Displays a neat clock that uses state in an es6 class
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    render(){
        return (
            <div>
                <h1>Hello, World</h1>
                <h2>It is: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }   
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

//Tutorial Link: https://reactjs.org/docs/state-and-lifecycle.html