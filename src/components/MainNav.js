import React from "react";
import "./../scss/_homeHeader.scss";
import { Link, useLocation } from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link as Scrolling} from 'react-scroll';

function MainNav() {

    const nav = useLocation();


return (
    <div className="main-nav">
        <div className="login-register-navigation">
            <Link to="/logowanie" className="login-register-link">Zaloguj</Link>
            <Link to="/rejestracja" className="login-register-link">Zarejestruj się</Link>
        </div>
        <nav className="Home-navigation">
            <Link to="/">Start</Link>
            {nav.pathname === "/" && (
                <>
                <Scrolling activeClass="active" to="homeSteps" spy={true} smooth={true}>O co chodzi?
                </Scrolling>
                <Scrolling activeClass="active" to="homeAbout" spy={true} smooth={true}>O nas</Scrolling>
                <Scrolling activeClass="active" to="about" spy={true} smooth={true}>Fundacja i organizacje</Scrolling>
                <Scrolling activeClass="active" to="homeContact" spy={true} smooth={true}>Kontakt</Scrolling>
                </>
            )}

        </nav>
    </div>)
}
export default MainNav;
