import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './addAuthorForm.css';

function AddAuthorForm({match, onAddAuthor}) {
    return(
        <div className="AddAuthorForm">
            <h1>Add Author</h1>
            <AuthorForm onAddAuthor={onAddAuthor} />
        </div>
    );
}

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            imageSource: '',
            books: [],
            bookTemp: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
        this.handleRemoveBook = this.handleRemoveBook.bind(this);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    handleAddBook() {
        // Prevent dup book input
        if (this.state.books.indexOf(this.state.bookTemp) >= 0) { return }
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        });
    }

    handleRemoveBook() {
        // Prevent trying to remove a book not in books array
        if (this.state.books.indexOf(this.state.bookTemp) === -1) { return }
        this.setState({
            books: this.state.books.filter(book => book !== this.state.bookTemp),
            bookTemp: ''
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="AddAuthorForm_input">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" value={this.state.name} onChange={this.onFieldChange} />
                </div>
                <div className="AddAuthorForm_input">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.onFieldChange} />
                </div>
                <div className="AddAuthorForm_input">
                    <label htmlFor="imageSource">Image Source</label>
                    <input name="imageSource" type="text" value={this.state.imageSource} onChange={this.onFieldChange} />
                </div>
                <div className="AddAuthorForm_input">
                    <label htmlFor="bookTemp">Books</label>
                    <ul>
                        {this.state.books.map((book) => <li key={book}>{book}</li>)}
                    </ul>                   
                    <input name="bookTemp" type="text" value={this.state.bookTemp} onChange={this.onFieldChange} />
                    <input type="button" value="+" onClick={this.handleAddBook} />
                    <input type="button" value="-" onClick={this.handleRemoveBook} />
                </div>
                <input type="submit" value="Add" />
            </form>
        );
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        onAddAuthor: (author) => {
            dispatch({ type: 'ADD_AUTHOR', author });
            props.history.push('/');
        }
    };
}

// Using Redux for action handling
// State is held inside the component so the store isn't used: () => {}
export default withRouter(connect(() =>{}, mapDispatchToProps)(AddAuthorForm));