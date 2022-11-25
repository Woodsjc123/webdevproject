import { Decimal128 } from "bson";
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
        type: Decimal128,
        required: [true, "No Price"]
    }
});

export const menuItem = mongoose.model("menu", schema);