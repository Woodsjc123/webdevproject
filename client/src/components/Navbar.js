import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import authContext from "../auth/auth.js";
import About from "../pages/About.js";

const Navbar = (props) => {
  const navigate = useNavigate();

  const {authenticated,  setAuthenticated } = useContext(authContext);

    const clickEventHander = () => {
        if(authenticated === true) {
          setAuthenticated(false);
        }
        else{

        }
    }

    const navigateHome = () => {
      navigate('/');
    };

    const navigateAbout = () => {
      navigate('/about');
    };

  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src='' alt="logo" width="30" height="24" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/" onClick={navigateHome}>Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">Login</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/register">Register</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about" onClick={navigateAbout}>About Us</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/profile" >Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;