import axios from 'axios'
import React, { useEffect } from 'react'
import { useContext } from 'react';
import authContext from '../auth/auth.js';
import { Navigate } from 'react-router-dom';


export default function Logout() {

    const { setAuthenticated } = useContext(authContext);
    const handleLogin = () => setAuthenticated(true);
    const handleLogout = () => setAuthenticated(false);

    const logOutUser = async () => {
        await axios.get("http://localhost:3001/api/users/logout");
        handleLogout();
    }

    useEffect(logOutUser(), []);
    

  return (
    <div>
      <h1>Successfully Logged Out</h1>
    <Navigate to="/" replace={true}/>
    </div>
    
  )
}
