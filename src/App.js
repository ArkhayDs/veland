import './assets/styles/index.css';
import React, { Component }  from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Home from "./Components/Pages/Home";


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;