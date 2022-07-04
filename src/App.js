import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./scss/App.scss";
import reset from 'react-style-reset';

import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
//tu będzie routing

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="logowanie" element={<Login />} />
                <Route path="rejestracja" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;