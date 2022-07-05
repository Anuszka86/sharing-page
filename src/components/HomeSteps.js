import React from "react";
import "./../scss/_homeSteps.scss";

import decoration from "../assets/Decoration.svg";
import step1 from "../assets/Icon-1.svg";
import step2 from "../assets/Icon-2.svg";
import step3 from "../assets/Icon-3.svg";
import step4 from "../assets/Icon-4.svg";
import {Link} from "react-router-dom";

function HomeSteps() {
    return (
        <div className="homeSteps" id="homeSteps">
            <h2 className="home-header">Wystarczą 4 proste kroki</h2>
            <img src={decoration} className="decor"/>
            <div className="steps-bar">
                <span className="step">
                    <img src={step1} className="step-icon"/>
                    <h4 className="step-header">Wybierz rzeczy</h4>
<p className="step-par">ubrania, zabawki, sprzęt i inne</p>
                </span>
                <span className="step">
                    <img src={step2} className="step-icon"/>
                    <h4 className="step-header">Spakuj je</h4>
     <p className="step-par">wybierz zaufane miejsce</p>
                </span>
                <span className="step">
                    <img src={step3} className="step-icon"/>
                    <h4 className="step-header">Zdecyduj komu chcesz pomóc</h4>
                    <p className="step-par">wybierz zaufane miejsce</p>
                </span>
                <span className="step">
                    <img src={step4} className="step-icon"/>
                    <h4 className="step-header">Zdecyduj komu chcesz pomóc</h4>
                    <p className="step-par">kurier przyjedzie w dogodnym terminie</p>
                </span>
            </div>
            <button className="entry-button submitting-button"><Link to="/logowanie" className="login-register-link">ODDAJ RZECZY</Link></button>
        </div>
    )
};

export default HomeSteps;