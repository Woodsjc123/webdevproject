import {menuItem} from '../models/menuItem.js'
import asyncHandler from "express-async-handler";

// Adds an item to the menu
export const addItem = asyncHandler (async(req, res) => {

    const {name, description, price, image} = req.body;

    console.log(req.body)
    

    if(!name) {  // Checks if username has been submitted
        res.status(400);
        throw new Error("Missing Name");
    }
    if(!price) {  // Checks if username has been submitted
        res.status(400);
        throw new Error("Missing Price");
    }

    const itemExists = await menuItem.findOne({name});

    if(itemExists){
        res.status(400);
        throw new Error("Item already exists");
    }

    const newItem = await menuItem.create({
        name,
        description,
        price,
        image
    });

    if(newItem){
        res.status(201).json({
            _id: newItem.id,
            username: newItem.name,
            description: newItem.description,
            price: newItem.price,
            image: newItem.image
        })
    }


});

// Returns all items in the menu
export const getMenu = asyncHandler (async(req, res) => {

    try {
        const menu = await menuItem.find();
        res.status(200).json(menu);
    } 
    catch (error) {
        res.status(500).json({message: error.message});
    }

});