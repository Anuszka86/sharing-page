import React from "react";
import {Route, Routes} from "react-router-dom";
import "./../scss/_home.scss"
import HomeHeader from "./HomeHeader";

function Home() {
    return (
        <div className="Home">
            <HomeHeader/>
            {/*<HomeThreeColumns/>
        <HomeSteps/>
        <HomeAbout/>
        <HomeOrganizations/>
        <HomeContact/>
        <HomeFooter/>*/}
        </div>
    )
};




export default Home;