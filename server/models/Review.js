const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    heading: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

const Review = mongoose.model("reviews", reviewSchema);
module.exports = Review;
