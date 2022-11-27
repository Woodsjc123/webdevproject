import React from 'react';
import RegisterForm from './RegisterForm';
import { useState } from 'react';
import axios from 'axios';

const RegisterHandler = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const {username} = formData;
  const {email} = formData;
  const {password} = formData;

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value })
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

    try {
      await axios.post("http://localhost:3001/api/users/register", formData )  // Post form data to server and try to make a new item
      setFormData({...formData, username: "", email: "", password: ""}) // Clear the form
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div class="register">
      <RegisterForm username={username} email={email} password={password} handleInputChange={handleInputChange} registerUser={registerUser}/>
    </div>
  );
};

export default RegisterHandler;