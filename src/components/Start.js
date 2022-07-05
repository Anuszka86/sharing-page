import React from "react";
import "./../scss/_homeHeader.scss"
import HeroPic from "./../assets/Home-Hero-Image.jpg";
import decoration from "./../assets/Decoration.svg";
import { Link } from "react-router-dom";

function Start(){

    return(
        <div className="start" id="start">
            <img className="heroPic" src={HeroPic}/>
            <div className="entry">
                <h2 className="home-header">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={decoration} className="decor"/>
                <div className="entry-buttons">
                    <button className="entry-button submitting-button"><Link to="/logowanie" className="login-register-link">ODDAJ RZECZY</Link></button>
                    <button className="entry-button submitting-button"><Link to="/logowanie" className="login-register-link">ZORGANIZUJ ZBIÓRKĘ</Link></button>
                </div>
            </div>
        </div>    )
}

export default Start
