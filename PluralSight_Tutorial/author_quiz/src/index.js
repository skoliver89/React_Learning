import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import AuthorQuiz from './authorQuiz.js';
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

const state = {
    turnData: getTurnData(authors),
    highlight: 'none'
};

// Top level Component for the game; Route ="/"
function App() {
    return (
        <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />
    );
}

// Top Level Component for the form to add new authors; Route = "/add"
function AddAuthorForm({match}) {
    return(
        <div>
            <h1>Add Author</h1>
            <p>{JSON.stringify(match)}</p>
        </div>
    );
}

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

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((book) => book === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}

// Render function, weird way of doing it but, this is how the tutorial/lesson did it.
function render() {
    ReactDOM.render(
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={App} />
                <Route path="/add" component={AddAuthorForm} />
            </React.Fragment>
        </BrowserRouter>, 
        document.getElementById('root')
    );
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();