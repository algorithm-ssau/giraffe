const express = require('express')
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

require('dotenv').config()
const app = express()
const PORT = process.env.PORT

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.header('Access-Control-Allow-Origin','*');
    res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
