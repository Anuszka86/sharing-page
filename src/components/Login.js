import React from "react";
import {Link} from "react-router-dom";
import "./../scss/_login-logout.scss"
import decoration from "./../assets/Decoration.svg"
import MainNav from "./MainNav";
import LoginForm from "./LoginForm";

function Login() {
    return (
       < div>
           <MainNav/>
           <div className="login-logout">

            <h2 className="login-logout-header">Zaloguj się</h2>
            <img src={decoration}/>
<LoginForm/>
        </div></div>
    )
};


export default Login;