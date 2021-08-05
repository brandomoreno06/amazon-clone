import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from '../../firebase';
 
 
 
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }


    const login = (e) => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch((error) => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg"
                alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={emailHandler}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={passwordHandler}/>
                    <button className="login__signIn" type="submit" onClick={login}>Sign in</button>
                </form>

                <p className="login__disclaimer">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}
 
 
 
export default Login;
 