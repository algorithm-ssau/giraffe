const express = require("express");
const router = express.Router();

const {
    getReviews,
    getReviewById,
} = require("../controller/reviewControllers");

router.get("/", getReviews);
router.get("/:id", getReviewById);

module.exports = router;
