import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import WeatherImages from "./pages/WeatherImages";
import AIResumeImages from "./pages/AIResumeImages";
import PowerBIImages from "./pages/PowerBIImages";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather-images" element={<WeatherImages />} />
        <Route path="/ai-resume-images" element={<AIResumeImages />} />
        <Route path="/powerbi-images" element={<PowerBIImages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;