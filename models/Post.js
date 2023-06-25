const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostShchema = new Schema({

    title: {
        type: String,
        requried: true
    },
    body: {
        type: String,
        requried: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        requried: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
     
    }
})



module.exports = mongoose.model("Post", PostShchema);