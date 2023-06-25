const express = require('express');

const router = express.Router();

// importing the post
const Post = require("../../models/Post");




// Routes render the ejs files depending on the situation


// home route
router.get("" , async (req, res)=>{
    const locals = {
        title: "Node JS Blog",
        description: "Simple Blog created with NodeJS, Express, and MongoDB"

    }

    try{
        // this will find all of the posts
        const data = await Post.find();
        res.render("index", {locals, data})

    }catch(err){
        console.log(err);
    }

})















router.get("/about" , (req, res)=>{
    res.render("about")
})

// this is important to export the router
module.exports = router;