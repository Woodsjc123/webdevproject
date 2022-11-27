import React from 'react';
import LoginForm from './LoginForm.js';
import { useState, useContext } from 'react';
import axios from 'axios';
import authContext from '../auth/auth.js';
import adminContext from '../auth/admin.js';


const LoginHandler = () => {
  
  
  const {authenticated,  setAuthenticated } = useContext(authContext);
  const handleLogin = () => setAuthenticated(true);
  
  // const {admin, setAdmin} = useContext(adminContext);
  // const handleAdmin = () => setAdmin(true);
  

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const {email} = formData;
  const {password} = formData;


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value })
  };

  const loginUser = async(e) => {
    e.preventDefault();
    if(email === "") {
      return alert("Email cannot be empty");
    }
    if(password === "") {
      return alert("Password cannot be empty");
    }

    try {
      const response = await axios.post("http://localhost:3001/api/users/login", formData )  // Post form data to server and try to make a new item
      setFormData({...formData, email: "", password: ""}) // Clear the form
      console.log(response?.data);

      const token = response?.data.token;
      localStorage.setItem('login', JSON.stringify({  // Stores the cookie to local storage
        login:true,
        token:token
      }))

      // if(email === "admin@example.com") {
      //   handleAdmin();
      // }
      
      handleLogin();


    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {authenticated ? (
        <div>
          <h2>Login Successful!</h2>
        </div>
      ) : (
    <div class="login">
      <LoginForm  email={email} password={password} handleInputChange={handleInputChange} loginUser={loginUser}/>
    </div>

      )}
      </>
  );
};

export default LoginHandler;