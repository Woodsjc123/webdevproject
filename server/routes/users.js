import express from 'express';
import { Router } from "express";
import { model } from "mongoose";
import { addItem, getMenu } from '../controller/menu.js';
import { register, login, logout, userProfile, getLoginStatus, updateUsername, updatePassword } from "../controller/user.js";
import { authorise } from '../middleware/authorisation.js';

export const router = express.Router();


// User Routes
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/userprofile", authorise, userProfile);
router.get("/loginstatus", getLoginStatus);
router.patch("/updateusername", authorise, updateUsername);
router.patch("/updatepassword", authorise, updatePassword);

// Menu Routes
router.post("/newitem", addItem);
router.get("/getmenu", getMenu);