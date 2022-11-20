import { user } from "../models/users.js";
import asyncHandler from "express-async-handler";

// Registers a new user
export const register = asyncHandler(async (req, res) => {

    const {username, email, password} = req.body;    // Body of the request

    // Verification
    if(!username) {  // Checks if username has been submitted
        res.status(400);
        throw new Error("Missing Username");
    }
    if(!email) {  // Checks if email has been submitted
        res.status(400);
        throw new Error("Missing Email");
    }
    if(!password) {  // Checks if password has been submitted
        res.status(400);
        throw new Error("Missing Password");
    }

    if (password.length < 8) {  // Checks if password meets required length
        res.status(400);
        throw new Error("Password must be at least 8 characters long");
    }

    const userExists = await user.findOne({email});

    // Checks if email is already in use
    if(userExists){
        res.status(400);
        throw new Error("Email is already registered");
    }

    const newUser = await user.create({
        username,
        email,
        password
    });

    if(newUser){
        res.status(201).json({
            _id: newUser.id,
            username: newUser.username,
            email: newUser.email
        })
    }
    else {
        res.status(400);
        throw new Error("Unable to create user");
    }

});


// Logs in a user
export const login = asyncHandler(async (req, res) => {

    const {email, password} = req.body;

    // Checks if email is entered
    if(!email) {
        res.status(400);
        throw new Error("Enter email");
    }
    // Check if password is entered
    if(!password) {
        res.status(400);
        throw new Error("Enter password");
    }

    // Checks to see if user email is in database
    const userExists = await user.findOne({email});

    // If user does not exist
    if(!userExists) {
        res.status(400);
        throw new Error("There is no user with that email");
    }

    // Checks if password is correct
    if(password !== userExists.password) {
        res.status(401);
        throw new Error("Incorrect Password");
    }

    // If user is valid, return username
    if(userExists) {
        res.status(201).json({
            email,
        });
    }
    else {
        res.status(400);
        throw new Error("Incorrect email or password");
    }
});

export const logout = asyncHandler(async (req, res) => {
    res.send("Logout");
});