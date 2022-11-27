import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import authContext from "../auth/auth.js";
import axios from "axios";

const Navbar = (props) => {

  const {authenticated,  setAuthenticated } = useContext(authContext);

  useEffect(() => {
    const response = axios.get("http://localhost:3001/loginstatus")
    if (response === true){
      setAuthenticated(true)
    }
    else {
      setAuthenticated(false)
    }
  }, [])

  return(
    <>
    { authenticated ? (
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <div class="container-fluid">
      <image src='../images/logo.png'/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/logout">Logout</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about" >About Us</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/profile" >Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    ) : (
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <div class="container-fluid">
      <image src='../images/logo.png'/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">Login</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/register">Register</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about" >About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )}
    </>
  );
};

export default Navbar;