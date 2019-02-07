import React from 'react';
import ReactDOM from 'react-dom';

// The simplest component - In a JS function (Function Component)
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
const element = <Welcome name="Stephen" />;

ReactDOM.render(
    element,
    document.getElementById('root')
);


//Tutorial Link: https://reactjs.org/docs/components-and-props.html