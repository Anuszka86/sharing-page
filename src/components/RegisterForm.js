import React from "react";
import {useState, useEffect} from "react";
import "./../scss/_login-logout.scss"
import {Link} from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebaseConfig";

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
            try {
                const user = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password,
                    passwordVerify
                );
                console.log(user);
            } catch (error) {
                console.log(error.message);
            }
        };



    return (
        <>
        <form className="login-logout-form">
            <label>
                Email
                <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                Hasło
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <label>
                Powtórz hasło
                <input type="password" name="password-verify" value={passwordVerify} onChange={e => setPasswordVerify(e.target.value)}/>
            </label>
        </form>
    <div className="login-logout-buttons-bar">
        <button className="login-logout-button"> <Link to="/logowanie" className="login-register-link">Zaloguj się</Link></button>
        <button className="login-logout-button submitting-button" onClick={handleRegister}>Zarejestruj się</button>
    </div>
        </>
    );
}

export default RegisterForm