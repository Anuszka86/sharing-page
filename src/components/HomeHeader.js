import React from "react";
import "./../scss/_homeHeader.scss"
import MainNav from "./MainNav";
import Start from "./Start";
function HomeHeader() {
    return (
        <div className="homeHeader">
            <MainNav/>
            <Start/>
        </div>
    )
};

export default HomeHeader;