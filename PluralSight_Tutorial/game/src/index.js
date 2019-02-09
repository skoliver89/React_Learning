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

    render() {
        return(
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                </div>
                <br />        
                <Numbers />       
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
            <span>5</span>
            <span>6</span>
        </div>
    );
};

const Numbers = (prop) => {
    //const arrayOfNumbers = _.range(1, 10);
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) =>
                    <span key={i}>{number}</span>
                )}
            </div>
        </div>
    );
}

Numbers.list = _.range(1, 10);

// =====================================================
ReactDom.render(<App />, document.getElementById('root'));