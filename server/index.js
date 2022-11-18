import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router } from "./routes/users.js"
import { errorHandler } from './errorHandler.js';
const app = express();

const uri = "mongodb+srv://woodsjc:BYRRwMYpTtkbOtQp@cluster0.wqrzkda.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/users", router);

// Routes
app.get("/", (req, res) => {
    res.send("Home");
});

app.use(errorHandler);

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(uri);
    
    console.log('Connection Successful');

    app.listen(PORT, () => {
        console.log(`Server Running on port ${PORT}`);
    });
}