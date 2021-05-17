const express = require("express");
const router = express.Router();

const {
    getReviews,
    getReviewById,
    postReview
} = require("../controller/reviewControllers");

router.get("/", getReviews);
router.get("/:id", getReviewById);
router.post('/', postReview)

module.exports = router;
