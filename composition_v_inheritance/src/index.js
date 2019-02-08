import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function App() {
    return (
        <React.Fragment>
            <WelcomeDialog />
            <br />
            <SignUpDialog />
            <br />
            <AboutInheritance />
            <br />
            <SplitPane
                left={<Contacts />}
                right={<Chat />} 
            />
        </React.Fragment>
    );
}

// Single 'hole' [children area] example
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

// Added Specialization - WelcomeDialog is a special case of Dialog
function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!" 
        />
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

// Multiple 'hole' [2+ children areas] example
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function Contacts() {
    return <div className="Contacts" />
}

function Chat() {
    return <div className="Chat" />
}

// Composition with components as classes
class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

    render() {
        return(
            <Dialog
                title = "Mars Exploration Program"
                message= "How should we refer to you?"
            >
            <input value = {this.state.login}
                onChange = {this.handleChange} />
            <button onClick={this.handleSignUp}>
                Sign Me Up!
            </button>
            </Dialog>
        );
    }
}

// About Inheritance msg
function AboutInheritance() {
    return (
        <Dialog
            title="So What About Inheritance?"
            message="`At Facebook, we use React in thousands of components, 
            and we haven’t found any use cases where we would recommend 
            creating component inheritance hierarchies.
            Props and composition give you all the flexibility you need to customize 
            a component’s look and behavior in an explicit and safe way. 
            Remember that components may accept arbitrary props, 
            including primitive values, React elements, or functions.
            If you want to reuse non-UI functionality between components, 
            we suggest extracting it into a separate JavaScript module. 
            The components may import it and use that function, object, 
            or a class, without extending it.` - React Docs/Tutorial"
        />
    );
}

// =================================================================
ReactDOM.render(<App />, document.getElementById('root'));

// Tutorial Link: https://reactjs.org/docs/composition-vs-inheritance.html
// Recommended to use composition rather than inheritance 
// to reuse code between components

// The next and last tutorial is all reading material so here is the link: https://reactjs.org/docs/thinking-in-react.html