import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { useState } from 'react';
import axios from 'axios';

const RegisterHandler = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    completed: false
  })
  const {username} = formData.username;
  const {email} = formData.email;
  const {password} = formData.password;
  const {repeatPassword} = formData.repeatPassword;

  const handleInputChange = (e) => {
    const {username, value} = e.target;
    setFormData({ ...formData, [username]: value })
  };

  const registerUser = async(e) => {
    e.preventDefault();
    if(username === "") {
      return alert("Username cannot be empty");
    }
    if(email === "") {
      return alert("Email cannot be empty");
    }
    if(password === "") {
      return alert("Password cannot be empty");
    }
    if(repeatPassword === "") {
      return alert("Confirm password");
    }

    try {
      await axios.post("http://localhost:3001/api/users/register", formData )  // Post form data to server and try to make a new item
      setFormData({...formData, username: "", email: "", password: "", repeatPassword: ""}) // Clear the form
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div class="register">
      <RegisterForm username={username} email={email} password={password} repeatPassword={repeatPassword} handleInputChange={handleInputChange} registerUser={registerUser}/>
    </div>
  );
};

export default RegisterHandler;