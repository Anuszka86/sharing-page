import React from "react";
import {Route, Routes} from "react-router-dom";
import "./../scss/_home.scss"
import HomeHeader from "./HomeHeader";

function Home() {
    return (
        <div className="Home">
            <h1>Home</h1>
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

/*function HomeHeader() {
    return (
        <div className="homeHeader">
            <h1>Home Header</h1>

        </div>
    )};*/


export default Home;