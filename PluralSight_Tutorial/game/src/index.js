import React from 'react';
import ReactDom from 'react-dom';
// FontAwesome for React: https://github.com/FortAwesome/react-fontawesome#usage
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheck, faEquals, faXRay, faTimes } from '@fortawesome/free-solid-svg-icons';
// Bootstrap for React: https://facebook.github.io/create-react-app/docs/adding-bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Load the full build. Lodash: https://lodash.com/
var _ = require('lodash');


class App extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <Game />
            </React.Fragment>
        );
    }
}

class Game extends React.Component {
    state = {
        selectedNumbers: [],
        numberOfStars:  Math.floor(Math.random()*9) + 1,
        answerIsCorrect: null
    };

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    unselectedNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers
                                      .filter(number => number !== clickedNumber)
        }));
    };

    // Normally don't store values that can be calculated in state
    // but we need it for a UI repaint, consider refactor later.
    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    };

    render() {
        const { selectedNumbers, numberOfStars, answerIsCorrect} = this.state;
        return(
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={numberOfStars} />
                    <Button selectedNumbers={selectedNumbers}
                            answerIsCorrect={answerIsCorrect}
                            checkAnswer={this.checkAnswer} />
                    <Answer selectedNumbers={selectedNumbers} 
                        unselectNumber={this.unselectedNumber} />
                </div>
                <br />        
                <Numbers selectedNumbers={selectedNumbers} 
                    selectNumber={this.selectNumber} />       
            </div>
        );
    }
}

const Stars = (props) => {
    //const numberOfStars = Math.floor(Math.random()*9) + 1;
    return (
        <div className="col-5">
            {_.range(props.numberOfStars).map(i => <FontAwesomeIcon key={i} icon={faStar} />)}
        </div>
    );
};

const Button = (props) => {
    let button;
    switch(props.answerIsCorrect){
        case true:
            button = 
                <button className="btn btn-success" disabled={props.selectedNumbers.length === 0}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>;
            break;
        case false:
        button = 
            <button className="btn btn-danger" disabled={props.selectedNumbers.length === 0}>
                <FontAwesomeIcon icon={faTimes} />
            </button>;
        break;
        default:
            button = 
                <button className="btn btn-primary" 
                    onClick={props.checkAnswer}
                    disabled={props.selectedNumbers.length === 0}>
                    <FontAwesomeIcon icon={faEquals} />
                </button>;
    }
    return (
        <div className="col-2">
            {button}
        </div>
    );
};

const Answer = (props) => {
    return (
        <div className="col-5">
            {props.selectedNumbers.map((number, i) => 
                <span key={i} onClick={() => props.unselectNumber(number)}>
                    {number}
                </span>    
            )}
        </div>
    );
};

const Numbers = (props) => {
    //const arrayOfNumbers = _.range(1, 10);
    const numberClassName = (number) => {
        if(props.selectedNumbers.indexOf(number) >=0) {
            return 'selected';
        }
    } 

    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i} className={numberClassName(number)}
                        onClick={() => props.selectNumber(number)}>
                        {number}
                    </span>
                )}
            </div>
        </div>
    );
}

Numbers.list = _.range(1, 10);

// =====================================================
ReactDom.render(<App />, document.getElementById('root'));