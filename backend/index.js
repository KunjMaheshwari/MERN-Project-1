const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRoute");

const app = express();

mongoose.set("strictQuery", true); // This code is used to supress the deprection warning
mongoose.connect("mongodb+srv://test:12345@cluster0.sw0rrdy.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open", ()=>console.log("Connected to the database"));
db.on("error", ()=>console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/studentRoute', studentRoute);

app.listen(4000, ()=>{
    console.log("Server is running on the port 4000");
})