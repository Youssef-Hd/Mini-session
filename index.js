import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import db from "./config/db.js";

dotenv.config();
await db();

const port = process.env.PORT || 5000;


const app = new express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send('Hello World');
})

app.listen(port,
    () =>(
        console.log(`API IS RUNING ON PORT: ${port}`)
    )
);