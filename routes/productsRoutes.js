const express = require('express');
const productController = require("../controllers/productController")
const productRouter = express.Router();

productRouter.route("/").get( productController.getAllProducts).post(productController.addProduct);
productRouter.route('/:id')
.get(productController.getProductById)
.delete(productController.deleteProductById)
.put(productController.updateProduct);

module.exports = productRouter;