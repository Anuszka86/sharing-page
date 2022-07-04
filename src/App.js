import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./scss/App.scss";
import reset from 'react-style-reset';

import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
//tu będzie routing

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="logowanie" element={<Login />} />
                <Route path="rejestracja" element={<Register />} />
                <Route path="wylogowano" element={<Logout />} />
            </Routes>
        </div>
    );
}

export default App;