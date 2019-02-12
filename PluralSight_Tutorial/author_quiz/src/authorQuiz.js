import React from 'react';
import { Link } from 'react-router-dom';
import './authorQuiz.css';
import './bootstrap.min.css'

function AuthorQuiz ({turnData, highlight, onAnswerSelected}) {

    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
        <Continue />
        <p><Link to="/add">Add An Author</Link></p>
        <Footer />
      </div>
    );
}

function Hero() {
  return (
  <div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown.</p>
    </div>
  </div>
  );
}

function Book({title, onClick}) {
  return(
    <div className="answer" onClick={() => {onClick(title);}}>
      <h4>{title}</h4>
    </div>
  );
}

function Turn({author, books, highlight, onAnswerSelected}) {
  function highlightToBgColor(highlight){
    const mapping ={
      'none' : '',
      'correct' : 'green',
      'wrong' : 'red'
    };
    return mapping[highlight];
  }

  return(
    <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorImage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
      </div>
    </div>
  );
}

function Continue (){
  return (
    null
  );
}

function Footer() {
  return(
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from: <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a> and are in the public domain.
        </p>
      </div>
    </div>
  );
}

export default AuthorQuiz;