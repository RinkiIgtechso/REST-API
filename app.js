require("dotenv").config();
const express = require("express");
const app = express();
require("./db/connection")
const cors = require("cors");
const userRouts = require("./Routes/userRouter");
const eventRouts = require("./Routes/eventRouter");
const PORT = 5005;


app.use(cors());
app.use(express.json());
app.use(userRouts);
app.use(eventRouts);

//  getresponse 
// app.get("/", (req, res)=>{
//     res.status(200).json("server start");
// }) 

//  server start
app.listen(PORT, ()=>{
    console.log(`Server start the PORT No: ${PORT}`)
})