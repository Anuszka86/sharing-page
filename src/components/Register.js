import React from "react";
import "./../scss/_login-logout.scss"
import decoration from "./../assets/Decoration.svg";
import MainNav from "./MainNav";
import RegisterForm from "./RegisterForm";

function Register() {
    return (
        <div>
            <MainNav/>
            <div className="login-logout">

                <h2 className="login-logout-header">Złóż konto</h2>
                <img src={decoration}/>
                <RegisterForm/>

            </div>
        </div>)
};


export default Register;