const Review = require("../models/Review");

const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        console.log(reviews);
        res.json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        res.json(review);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    getReviews,
    getReviewById,
};
