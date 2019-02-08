import React from 'react';
import ReactDOM from 'react-dom';

// Display many clocks to show that they are truly isolated. . .
function App() {
    return (
        <div>
            <Clock />
            <br />
            <Clock />
            <br />
            <Clock />
        </div>
    );
}


// Displays a neat clock that uses state in an es6 class
// State can be passed from parent to child as props but not the other way around
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()} //set starting state
    }
    
    // When the component 'mounts' (life-cycle method)
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // When the component 'unmounts' (life-cycle method)
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // Update the clock display each second
    tick() {
        this.setState({ // Update the clock's state
            date: new Date()
        });
    }

    // Passing Clock's State to FormattedDate (its child)
    render(){
        return (
            <div>
                <h1>Hello, World</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }   
}

// Child of Clock
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

//Tutorial Link: https://reactjs.org/docs/state-and-lifecycle.html