import React from "react";
import {useState, useEffect} from "react";
import "./../scss/_login-logout.scss"
import {Link} from "react-router-dom";

import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebaseConfig";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({})

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };
    const validate = () => {
        const err = {}

        if (!email?.includes("@")) {
            err.email = "Niepoprawny email"
        }
        if (password?.length < 6) {
            err.password = "musi być dłuższa niż 6 znaków"
        }


        if (Object.values(err).length) {
            setErrors(err);
            return false;
        }

        return true;

    }
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value);
        validate();
    }

    const handleChangePass = (e) =>{
        setPassword(e.target.value);
        validate();
    }


     return (
        <>
            <form className="login-logout-form">
                <label>
                    Email
                    <input type="text" name="email" value={email} onChange={handleChangeEmail}/>
                </label>
                <label>
                    Hasło
                    <input type="password" name="password" value={handleChangePass()}/>
                </label>

            </form>
            <div className="login-logout-buttons-bar">
                <button className="login-logout-button"> <Link to="/rejestracja" className="login-register-link"> Zarejestruj się </Link></button>
                <button className="login-logout-button submitting-button" onClick={handleLogin}>Zaloguj się</button>
            </div>
        </>
    );
}

export default LoginForm;