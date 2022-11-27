import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Profile from "./pages/Profile.js"
import PageNotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import authContext from "./auth/auth";
import axios from "axios";

export default function App() {

  const [authenticated, setAuthenticated] = useState(false);


  return (

    <div className="App">
      <authContext.Provider value={{ authenticated, setAuthenticated }}>
        <Router>
      
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </authContext.Provider>
      
    </div>
    
    
  );
}
