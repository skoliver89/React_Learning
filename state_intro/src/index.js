import React from 'react';
import ReactDOM from 'react-dom';

// Displays a neat clock that uses state in an es6 class
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
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
        this.setState({
            date: new Date()
        });
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