import express from 'express';
import { Router } from "express";
import { model } from "mongoose";
import { register } from "../controller/user.js";

export const router = express.Router();

router.post("/register", register);
