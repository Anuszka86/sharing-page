import React from "react";
import {Link} from "react-router-dom";
import "./../scss/_login-logout.scss"
import decoration from "./../assets/Decoration.svg"
import MainNav from "./MainNav";


function Logout() {


    return (
        <div>
            <MainNav/>
            <div className="login-logout">
                <h2 className="login-logout-header">Wylogowanie nastąpiło pomyślnie</h2>
                <img src={decoration}/>
                <button className="login-logout-button submitting-button"><Link to="/"
                                                                                className="login-register-link"> Strona
                    główna </Link></button>
            </div>
        </div>)
}

export default Logout;