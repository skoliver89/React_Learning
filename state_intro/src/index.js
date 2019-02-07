import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello, World</h1>
                <h2>It is: {this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
    
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

//Tutorial Link: https://reactjs.org/docs/state-and-lifecycle.html