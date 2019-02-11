import React from 'react';
import ReactDom from 'react-dom';
// FontAwesome for React: https://github.com/FortAwesome/react-fontawesome#usage
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheck, faEquals, faTimes, faRecycle } from '@fortawesome/free-solid-svg-icons';
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
    static randomNumber = (currNum) => { 
        let randNum = Math.floor(Math.random()*9) + 1;
        while (randNum === currNum) {
            randNum = Math.floor(Math.random()*9) + 1;
        }
        return randNum;
    };

    static initialState = () => ({
        selectedNumbers: [],
        usedNumbers: [],
        numberOfStars: Game.randomNumber(),
        answerIsCorrect: null,
        redraws: 5,
        doneStatus: null,
        timeRemaining: 60
    });

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    state = Game.initialState();

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0 || 
            this.state.usedNumbers.indexOf(clickedNumber) >= 0) {
                return; 
        }
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    unselectedNumber = (clickedNumber) => {
        this.setState(prevState => ({
            answerIsCorrect: null,
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

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            numberOfStars: Game.randomNumber(prevState.numberOfStars)
        }), this.updateDoneStatus);

    };

    redraw = () => {
        if (this.state.redraws === 0) { return };
        this.setState(prevState => ({
            numberOfStars: Game.randomNumber(prevState.numberOfStars),
            answerIsCorrect: null,
            selectedNumbers: [],
            redraws: prevState.redraws - 1
        }), this.updateDoneStatus);
    };

    possibleSolutions = (numberOfStars, usedNumbers) => {
        const possibleNumbers = _.range(1, 10).filter(number => 
            usedNumbers.indexOf(number) === -1);

        return possibleCombinationSum(possibleNumbers, numberOfStars);
    };

    updateDoneStatus = () => {
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return {doneStatus: 'You Win: Congratulations!'};
            }
            if (prevState.timeRemaining === 0){
                return {doneStatus: `Time's Up: Game Over!`};
            }
            if (prevState.redraws === 0 && !this.possibleSolutions(
                                                    prevState.numberOfStars, 
                                                    prevState.usedNumbers)) {
                return {doneStatus: 'No More Options: Game Over!'};
            }
        });
    };

    resetGame = () => this.setState(Game.initialState());

    // tick down the game timer
    tick() {
        this.setState(prevState => {
            if (prevState.timeRemaining !== 0 && prevState.doneStatus === null) {
                return {timeRemaining: prevState.timeRemaining - 1};
            }
        }, this.updateDoneStatus);
    }

    render() {
        const { 
            selectedNumbers, 
            numberOfStars, 
            answerIsCorrect, 
            usedNumbers, 
            redraws,
            doneStatus
        } = this.state;
        return(
            <div className="container">
            <br />
                <div className="row">
                    <h3 className="col-7">Play Nine</h3>
                    <h5 className="col-5">Time Remaining: {this.state.timeRemaining}</h5>
                </div>
                <hr />
                <div className="row">
                    <Stars numberOfStars={numberOfStars} />
                    <Button selectedNumbers={selectedNumbers}
                        answerIsCorrect={answerIsCorrect}
                        redraws={redraws}
                        checkAnswer={this.checkAnswer} 
                        acceptAnswer={this.acceptAnswer} 
                        redraw={this.redraw} />
                    <Answer selectedNumbers={selectedNumbers} 
                        unselectNumber={this.unselectedNumber} />
                </div>
                <br />
                {doneStatus ? 
                    <DoneFrame doneStatus={doneStatus} 
                        resetGame={this.resetGame} /> :
                    <Numbers selectedNumbers={selectedNumbers}
                        usedNumbers={usedNumbers}
                        selectNumber={this.selectNumber} />
                }       
            </div>
        );
    }
}

// bit.ly/s-pcs
var possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount ; i++ ) {
      var combinationSum = 0;
      for (var j=0 ; j < listSize ; j++) {
        if (i & (1 << j)) { combinationSum += arr[j]; }
      }
      if (n === combinationSum) { return true; }
    }
    return false;
  };

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
                <button className="btn btn-success" 
                onClick={props.acceptAnswer}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>;
            break;
        case false:
        button = 
            <button className="btn btn-danger">
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
        <div className="col-2 text-center">
            {button}
            <br />
            <br />
            <button className="btn btn-warning btn-sm" onClick={props.redraw}>
                <FontAwesomeIcon icon={faRecycle} /> {props.redraws}
            </button>
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
        if(props.usedNumbers.indexOf(number) >= 0) {
            return 'used';
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

const DoneFrame = (props) => {
    return(
        <div className="text-center">
            <h2>{props.doneStatus}</h2>
            <br />
            <button className="btn btn-secondary"
                onClick={props.resetGame}>
                Play Again
            </button>
        </div>
    );
};

Numbers.list = _.range(1, 10);

// =====================================================
ReactDom.render(<App />, document.getElementById('root'));