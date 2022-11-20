import express from 'express';
import { Router } from "express";
import { model } from "mongoose";
import { register } from "../controller/user.js";
import { login } from '../controller/user.js';
import { logout } from '../controller/user.js';

export const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
