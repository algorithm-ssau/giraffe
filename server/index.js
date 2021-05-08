const express = require('express')
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

require('dotenv').config()
const app = express()
const PORT = process.env.PORT

connectDB();


app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
