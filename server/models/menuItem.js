import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "No name"]
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: [true, "No Price"]
    },
    image: {
        type: String
    }
});

export const menuItem = mongoose.model("menu", schema);