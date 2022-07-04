import React from "react";
import "./../scss/_homeHeader.scss";
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';
import { Link as Scrolling} from 'react-scroll';

function MainNav() {
return (
    <div className="main-nav">
        <div className="login-register-navigation">
            <Link to="/logowanie" className="login-register-link">Zaloguj</Link>
            <Link to="/rejestracja" className="login-register-link">Zarejestruj się</Link>
        </div>
        <nav className="Home-navigation">
            <Scrolling activeClass="active" to="start" spy={true} smooth={true}>Start</Scrolling>
            <Scrolling activeClass="active" to="three-columns" spy={true} smooth={true}>O co chodzi?
            </Scrolling>
            <Scrolling activeClass="active" to="about" spy={true} smooth={true}>O nas</Scrolling>
            <Scrolling activeClass="active" to="about" spy={true} smooth={true}>Fundacja i organizacje</Scrolling>
            <Scrolling activeClass="active" to="about" spy={true} smooth={true}>Kontakt</Scrolling>
        </nav>
    </div>)
}
export default MainNav;
