import mongoose from "mongoose";

const schema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "No username"]
    },
    email: {
        type: String,
        required: [true, "No email"],
        unique: true,
        trim: true,
        // https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
        match: [/^\S+@\S+\.\S+$/]
    },
    password: {
        type: String,
        required: [true, "No password"],
        minLength: [6, "Password is too short, ensure it is at least 8 characters long"]
    }
}, 
{
    timestamps: true
});

export const user = mongoose.model("user", schema);