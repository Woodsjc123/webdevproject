import { user } from "../models/users.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const protect = asyncHandler (async(req, res, next) => {
    try {
        const token = req.cookies.token;

        if(!token){
            res.status(401);
            throw new Error("Not Authorised");
        }

        // Check token
        const verify = jwt.verify(token, "emI202^D9pP5");

        const userExists = await user.findById(verify.id).select("-password");

        if(!userExists){
            res.status(400);
            throw new Error("User does not exist");
        }
        req.user = userExists;
        next();

    } catch (error) {
        res.status(400);
        throw new Error("Not Authorised");
    }
});