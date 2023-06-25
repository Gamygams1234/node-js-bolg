require('dotenv').config();

const express = require('express');
const expressLayout = require("express-ejs-layouts");


const connectDB = require("./server/config/db")

const app = express();
const PORT = 5000 || process.env.PORT;


// connet to database

connectDB();

// using the public folders
app.use(express.static("public"))

// templating
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");




app.use("/", require("./server/routes/main"))


app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`);
})