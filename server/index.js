import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();


const uri = "mongodb+srv://woodsjc:BYRRwMYpTtkbOtQp@cluster0.wqrzkda.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(uri);
    
    console.log('Connection Successful');
}