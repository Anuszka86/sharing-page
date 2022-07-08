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
    const [errors, setErrors] = useState({})

    const validate = () => {
        const err = {}

         if (!email?.includes("@")) {
            err.email = "Niepoprawny email"
        }
        if (password?.length < 6) {
            err.password = "musi być dłuższa niż 6 znaków"
        }
        if (passwordVerify !== password) {
            err.passwordVerify= "hasła muszą być identyczne"
        }


        if (Object.values(err).length) {
            setErrors(err);
            return false;
        }

        return true;

    }
    console.log(errors);
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


const handleChangeEmail = (e) =>{
    setEmail(e.target.value);
    validate();
}

const handleChangePass = (e) =>{
    setPassword(e.target.value);
    validate();
}

    const handleChangePassVerify = (e) =>{
        setPasswordVerify(e.target.value);
        validate();
    }

    return (
        <>
        <form className="login-logout-form">
            <label>
                Email
                <input type="text" name="email" value={email} onChange={handleChangeEmail}/>
                <p>{errors?.email}</p>
                       {/*{e => setEmail(e.target.value)}*/}
            </label>
            <label>
                Hasło
                <input type="password" name="password" value={password} onChange={handleChangePass}/>
                    {/*{e => setPassword(e.target.value)}*/}
                <p>{errors?.password}</p>
            </label>
            <label>
                Powtórz hasło
                <input type="password" name="password-verify" value={passwordVerify} onChange={handleChangePassVerify}/>
                    {/*{e => setpasswordVerify(e.target.value)}*/}
                <p>{errors?.passwordVerify}</p>
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