import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import authContext from "../auth";
import '../css/navbar.css'

const Navbar = () => {

  const {authenticated,  setAuthenticated } = useContext(authContext);

    const clickEventHander = () => {
        setAuthenticated(!authenticated);
    }

  return(


    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;