import express from 'express';
import { Router } from "express";
import { model } from "mongoose";
import { register, login, logout, userProfile } from "../controller/user.js";
import { protect } from '../middleware/authorisation.js';

export const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/userProfile", protect, userProfile);
