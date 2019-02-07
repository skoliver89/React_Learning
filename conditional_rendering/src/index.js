import React from 'react';
import ReactDOM from 'react-dom';

function UserGreeting(props) {
    return <h1>Welcome Back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    // Conditional rendering works the same way as JS conditionals
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

ReactDOM.render(
    // Changing isLoggedIn's value will change the greeting displayed.
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
);