import React from "react";
import {Link} from "react-router-dom";
import "./../scss/_login-logout.scss"
import decoration from "./../assets/Decoration.svg";
import MainNav from "./MainNav";

function Register() {
    return (
        <div className="login-logout">
            <MainNav/>
            <h2 className="login-logout-header">Złóż konto</h2>
            <img src={decoration}/>

            <form className="login-logout-form">
                <label>
                    Email
                    <input type="text" name="email"/>
                </label>
                <label>
                    Hasło
                    <input type="password" name="password"/>
                </label>
                <label>
                    Powtórz hasło
                    <input type="password" name="password-verify"/>
                </label>
            </form>
            <div className="login-logout-buttons-bar">
                <button className="login-logout-button"> <Link to="/logowanie" className="login-register-link">Zaloguj się</Link></button>
                <button className="login-logout-button submitting-button">Zarejestruj się</button>
            </div>
        </div>
    )
};


export default Register;