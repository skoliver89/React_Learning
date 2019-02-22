import React from 'react';
import ReactDOM from 'react-dom';

// The simplest component - In a JS function (Function Component)
// Always start component names with a capital letter.
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// Can also be defined with an ES6 class (They have additional features that will be discussed later!):
// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }

// Rendering a Component
// const element = <Welcome name="Stephen" />;

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// Composing Components
// Can refer to other comp. in their output
function App() {
    return (
        <div>
            <Welcome name="Stephen" />
            <Welcome name="Sal" />
            <Welcome name="Ed" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// All React Components must act like pure functions with respect to props!

//Tutorial Link: https://reactjs.org/docs/components-and-props.html