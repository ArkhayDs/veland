import './assets/styles/index.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login isLogin={true} />} />
                    <Route path="/register" element={<Login isLogin={false} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;