import mongoose from "mongoose";

export const token = mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    token: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        required: true,
    },
    expires: {
        type: Date,
        required: true
    }
});