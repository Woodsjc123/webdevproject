import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Profile from "./pages/Profile.js"
import PageNotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

export default function App() {
  
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
    
  );
}
