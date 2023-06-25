const express = require('express');

const router = express.Router();

// Routes render the ejs files depending on the situation
router.get("" , (req, res)=>{
    const locals = {
        title: "Node JS Blog",
        description: "Simple Blog created with NodeJS, Express, and MongoDB"

    }
    res.render("index", {locals})
})
router.get("/about" , (req, res)=>{
    res.render("about")
})

// this is important to export the router
module.exports = router;