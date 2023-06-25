const express = require('express');

const router = express.Router();

// Routes
router.get("" , (req, res)=>{
    res.render("index")
})

// this is important to export the router
module.exports = router;