import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";


function App() {

    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/authentication" element={<Login/>} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;