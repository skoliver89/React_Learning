import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        // Can get around this by adding an arrow function to button's onClick:
        // <button onClick={(e) => this.handleClick(e)}>Click me</button>
        // But may cause unwanted re-renders resulting in performance to degrade
        // Recommended to bind as seen bellow for performance reasons.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
                isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);

// Tutorial Link: https://reactjs.org/docs/handling-events.html?no-cache=1