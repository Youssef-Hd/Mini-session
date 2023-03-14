import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import db from "./config/db.js";
import programRoute from "./routes/program_routes.js"


dotenv.config();
await db();

const port = process.env.PORT || 5000;


const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/programs", programRoute)
app.use("/programs/:id", programRoute)

app.listen(port,
    () =>(
        console.log(`API IS RUNING ON PORT: ${port}`)
    )
);