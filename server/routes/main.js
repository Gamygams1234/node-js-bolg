const express = require('express');

const router = express.Router();

// Routes
router.get("" , (req, res)=>{
    res.send("Hello world")
})

// this is important to export the router
module.exports = router;