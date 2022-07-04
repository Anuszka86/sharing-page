import React from "react";
import "./../scss/_homeHeader.scss"
import HeroPic from "./../assets/Home-Hero-Image.jpg";
import decoration from "./../assets/Decoration.svg";


function Start(){

    return(
        <div className="start" id="start">
            <img src={HeroPic}/>
            <div className="entry">
                <h2>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={decoration}/>
                <div className="entry-buttons">
                <button className=" submitting-button">ODDAJ RZECZY</button>
                <button className=" submitting-button">ZORGANIZUJ ZBIÓRKĘ</button>
                </div>
            </div>
        </div>    )
}

export default Start
