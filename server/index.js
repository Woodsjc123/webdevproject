import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { router } from "./routes/users.js"
import { errorHandler } from './middleware/errorHandler.js';
const app = express();

const uri = "mongodb+srv://woodsjc:BYRRwMYpTtkbOtQp@cluster0.wqrzkda.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;


// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/api/users", router);


// Routes
app.get("/", (req, res) => {
    res.send("Home");
});


// Errors
app.use(errorHandler);

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(uri);
    
    console.log('Connection Successful');

    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    });
}