import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import './index.css';
import AuthorQuiz from './authorQuiz.js';
import AddAuthorForm from './addAuthorForm.js'
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';


// Application Data
const authors = [
    {
        name: 'Mark Twain',
        imageUrl: require('./images/authors/marktwain.jpg'),
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn', 'The Adventures of Tom Sawyer', 'Life on the Mississippi', 'Roughing It']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: require('./images/authors/josephconrad.PNG'),
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness', 'Lord Jim', 'The Secret Agent', 'Nostromo']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: require('./images/authors/jkrowling.jpg'),
        imageSource: 'Wikimedia Commons',
        books: ['Harry Potter', 'The Tales of Beedle The Bard', 'The Casual Vacancy', 'Quidditch Through the Ages']
    },
    {
        name: 'Stephen King',
        imageUrl: require('./images/authors/stephenking.jpg'),
        imageSource: 'Wikimedia Commons',
        books: ['The Shining', 'IT', 'Pet Cemetary', 'Cujo']
    },
    {
        name: 'Charles Dickens',
        imageUrl: require('./images/authors/charlesdickens.jpg'),
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities', 'A Christmas Carol', 'Great Expectations']
    },
    {
        name: 'William Shakespeare',
        imageUrl: require('./images/authors/williamshakespeare.jpg'),
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet', 'The Tempest']
    }
];

// State/Actions using Redux
function reducer(state = { authors, turnData: getTurnData(authors), highlight: ''}, action) {
    switch (action.type) {
        case 'ANSWER_SELECTED':
            const isCorrect = state.turnData.author.books.some((book) => book === action.answer);
            return Object.assign(
                {},
                state,
                {highlight: isCorrect ? 'correct' : 'wrong'}
            );
        case 'CONTINUE':
            return Object.assign(
                {},
                state,
                {
                    highlight: '', 
                    turnData: getTurnData(authors)
                }
            );
        case 'ADD_AUTHOR':
            return Object.assign(
                {},
                state,
                {authors: state.authors.concat([action.author])}
            );
        default:
            return state;
    }
}

let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function getTurnData(authors) {
    const allBooks = authors.reduce(function (p, c, i) {
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) => 
            author.books.some((title) => 
                title === answer))
    }
}

// Now using react-router for routes and react-redux (Redux) for state/action management
ReactDOM.render(
    <BrowserRouter>
        <ReactRedux.Provider store={store}>
            <React.Fragment>
                <Route exact path="/" component={AuthorQuiz} />
                <Route path="/add" component={AddAuthorForm} />
            </React.Fragment>
        </ReactRedux.Provider>
    </BrowserRouter>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
