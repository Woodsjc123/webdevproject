import { request } from "express";
import { user } from "../models/users.js";

// Registers a new user
export const register = async (req, res) => {
    try {
        const {username, email, password} = req.body    // Body of the request

        // Verification
        if(!username || !email || !password) {  // Checks if all fields have been submitted
            res.status(400)
            throw new Error("Missing Required Fields");
        }
        if (password.length < 8) {  // Checks if password meets required length
            res.status(400)
            throw new Error("Password must be at least 8 characters long");
        }

        const userExists = await user.findOne({email})

        // Checks if email is already in use
        if(userExists){
            res.status(400)
            throw new Error("Email is already registered");
        }

        const newUser = await user.create({
            username,
            email,
            password
        });

        if(newUser){
            res.status(201).json({
                _id: user.id,
                username: user.username
            })
        }
        else {
            res.status(400)
            throw new Error("Unable to create user");
        }

        } catch (error) {

    }
};
