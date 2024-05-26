import React, {useContext, useRef} from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../context/AuthContext';

import "./login.css"

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const {login} = useContext(AuthContext);

    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch (error) {
            console.log(error.message);
            // TODO: show error message to user
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">StoryBook</h3>
                    <span className="loginDesc">
                    Connect with friends and
                    the world around you on StoryBook.
                </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input ref={emailRef} placeholder="Username" className="loginInput"/>
                        <input ref={passwordRef} placeholder="Password" className="loginInput"/>
                        <button className="loginButton" onClick={handleLogin}>Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <span className="LoginRegister">Don't have an account, Click here to</span>
                        <button className="loginRegisterButton">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
