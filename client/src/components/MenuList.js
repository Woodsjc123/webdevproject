import React, { useEffect } from 'react';
import NewMenuItem from './NewMenuItem';
import { useState } from 'react';
import axios from 'axios'

const MenuList = () => {

  const [items, setItems] = useState([])

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    completed: false
  })
  const {name} = formData;
  const {description} = formData;
  const {price} = formData;
  const {image} = formData;

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value })
  };


  const createItem = async (e) => {
    e.preventDefault();
    if(name === "") {
      return alert("Name cannot be empty");
    }
    if(price < 0) {
      return alert("Price cannot be zero or less");
    }

    try {
      await axios.post("http://localhost:3001/api/menu/newitem", formData)  // Post form data to server and try to make a new item
      setFormData({...formData, name: "", description: "", price: 0, image: ""}) // Clear the form
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="menu" >

      <NewMenuItem name={name} description={description} price={price} image={image} handleInputChange={handleInputChange} 
      createItem={createItem}/>

    </div>
  );
}

export default MenuList;