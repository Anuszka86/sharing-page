import React from "react";
import {Link} from "react-router-dom";
import "./../scss/_login-logout.scss"
import decoration from "./../assets/Decoration.svg"
import MainNav from "./MainNav";

function Login() {
    return (
       < div>
           <MainNav/>
           <div className="login-logout">

            <h2 className="login-logout-header">Zaloguj się</h2>
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
            </form>
            <div className="login-logout-buttons-bar">
                <button className="login-logout-button"> <Link to="/rejestracja" className="login-register-link"> Zarejestruj się </Link></button>
                <button className="login-logout-button submitting-button">Zaloguj się</button>
            </div>
        </div></div>
    )
};


export default Login;