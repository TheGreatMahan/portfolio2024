// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./Pages/Projects/Projects";
import Experience from "./Pages/Experience/Experience";
import About from "./Pages/About/About";
import Technologies from "./Pages/Technologies/Technologies";
import Reachout from "./Pages/Reachout/Reachout";

function App() {
    return (
        <div className="w-[100%]">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/reachout" element={<Reachout />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
