import React from 'react';
import NewMenuItem from './NewMenuItem';
import { useState } from 'react';
import axios from 'axios'

const MenuItem = () => {

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    completed: false
  })
  const {name} = formData;
  const {description} = formData;
  const {price} = formData;

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value })
  };

  const createItem = async (e) => {
    e.preventDefault();
    if(name === "") {
      return alert("Name cannot be empty");
    }
    if(price === 0) {
      return alert("Price cannot be zero");
    }

    try {
      await axios.post("http://localhost:3001/api/menu/newitem", formData)  // Post form data to server and try to make a new item
      setFormData({...formData, name: "", description: "", price: 0}) // Clear the form
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="movie" >
      <h2>Menu</h2>

      <NewMenuItem name={name} description={description} price={price} handleInputChange={handleInputChange} 
      createItem={createItem}/>

    </div>
  );
}

export default MenuItem;