const express = require('express');
const morgan = require('morgan');
const app = express();
const productRouter = require("./routes/productsRoutes");


app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/products", productRouter);

module.exports = app;
