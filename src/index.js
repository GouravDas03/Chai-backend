// require('dotenv').config({path: "./env"})  - Consistency suffers

import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: "./env"
})







connectDB();






















/*
import express from "express";
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Err: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is lietening at port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error);
        throw error;
    }
})()

*/