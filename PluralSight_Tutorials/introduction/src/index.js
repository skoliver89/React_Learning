import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    state = {counter: 0}

    incrementCounter = (incrementValue) => {
        //We are reading and writing the state so use this method instead
        //of setState()
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
                <Result counter={this.state.counter}/>
            </React.Fragment>
        );
    }
}

class Button extends React.Component {
    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue);
    }
    render() {
        return(
            <button onClick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        );
    }
}

const Result = (props) => {
    return (
        <div>
            {props.counter}
        </div>
    );
}

// ============================================================
ReactDom.render(<App />, document.getElementById('root'));