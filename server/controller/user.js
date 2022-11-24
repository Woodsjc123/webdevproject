import { user } from "../models/users.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const genToken = (id) => {
    return jwt.sign({id}, "emI202^D9pP5", {expiresIn: "1h"});
};

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

    // Creates the new user
    const newUser = await user.create({
        username,
        email,
        password
    });

    // Token
    const token = genToken(newUser._id);

    // Sends cookie
    res.cookie("token", token, {
        path: "/",      // Where cookie is stored
        httpOnly: true, // Cookie only to be used by the web server
        expires: new Date(Date.now() + (3600*1000)),  // Expires in one hour
        sameSite: "none",   // Allows use with different URL
        secure: false    // HTTPS does not work on localhost
    });

    if(newUser){
        res.status(201).json({
            _id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            token: token
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

    else {  // Else, create a token to log user in
        const token = genToken(userExists._id);

        res.cookie("token", token, {
            path: "/",      // Where cookie is stored
            httpOnly: true, // Cookie only to be used by the web server
            expires: new Date(Date.now() + (3600*1000)),  // Expires in one hour
            sameSite: "none",   // Allows use with different URL
            secure: false    // HTTPS does not work on localhost
        });

        const {_id, username, email} = userExists;
        res.status(200).json({
            _id,
            username,
            email,
            token
        });
    }
});

// Logout a user
export const logout = asyncHandler(async (req, res) => {
    res.cookie("token", "", {
        path: "/",      // Where cookie is stored
        httpOnly: true, // Cookie only to be used by the web server
        expires: new Date(Date.now()),  // Expires the cookie
        sameSite: "none",   // Allows use with different URL
        secure: false        // Only use with https
    });
    return res.status(200).json({ message: "Successfully logged out" });
});

// Fetch User Profile
export const userProfile = asyncHandler(async (req, res) => {
    const userData = await user.findById(req.user._id);

    if(userData){
        res.status(200).json({
            _id: userData.id,
            username: userData.username,
            email: userData.email,
            token: userData.token
        });
    }
    else {
        res.status(400);
        throw new Error("User does not exist");
    }
});

// Is the user logged in?
export const getLoginStatus = asyncHandler (async(req, res) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json(false);
    }

    // Check token
    const verify = jwt.verify(token, "emI202^D9pP5");

    if (verify) {
        return res.json(true);
    }
    else {
        return res.json(false);
    }
});

// Update user's username
export const updateUsername = asyncHandler (async(req, res) => {
    
    const profile = await user.findById(req.user._id);  // Find users profile in database

    if(profile){ // If profile is found
        profile.username = req.body.username;   // Changes the user's username to what they request

        const updatedProfile = await profile.save();
        res.status(200).json({username: updatedProfile.username})
    }
    else{
        res.status(404);
        throw new Error("User Profile not found")
    }
});

export const updatePassword = asyncHandler (async(req, res) => {
    
    const profile = await user.findById(req.user._id);

    const {oldPassword, newPassword} = req.body;

    if(!profile){
        res.status(400);
        throw new Error("User Profile not found")
    }
    else if(!oldPassword){
        res.status(400);
        throw new Error("Please enter the old password");
    }
    else if(!newPassword){
        res.status(400);
        throw new Error("Please enter the new password");
    }

    // Verify old password matches
    if(await profile.password === oldPassword){
        profile.password = newPassword;
        await profile.save();
        res.status(200).send("Changed Password Successfully");
    }
    else{
        res.status(401);
        throw new Error("Password is incorrect");
    }
});

export const forgotPassword = asyncHandler (async(req, res) => {
    // placeholder
});