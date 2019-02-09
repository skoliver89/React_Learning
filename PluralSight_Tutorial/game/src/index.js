import React from 'react';
import ReactDom from 'react-dom';
// FontAwesome for React: https://github.com/FortAwesome/react-fontawesome#usage
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
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
        selectedNumbers: [2, 4]
    };
    render() {
        return(
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer selectedNumbers={this.state.selectedNumbers} />
                </div>
                <br />        
                <Numbers selectedNumbers={this.state.selectedNumbers} />       
            </div>
        );
    }
}

const Stars = (props) => {
    const numberOfStars = Math.floor(Math.random()*9) + 1;
    return (
        <div className="col-5">
            {_.range(numberOfStars).map(i => <FontAwesomeIcon key={i} icon={faStar} />)}
        </div>
    );
};

const Button = (props) => {
    return (
        <div className="col-2">
            <button>=</button>
        </div>
    );
};

const Answer = (props) => {
    return (
        <div className="col-5">
            {props.selectedNumbers.map((number, i) => 
                <span key={i}>{number}</span>    
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
                    <span key={i} className={numberClassName(number)}>{number}</span>
                )}
            </div>
        </div>
    );
}

Numbers.list = _.range(1, 10);

// =====================================================
ReactDom.render(<App />, document.getElementById('root'));