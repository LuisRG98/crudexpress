const fs = require('fs');
const Product = require('../models/Product');
const catchAsync = require('../utils/catchAsync');

exports.getAllProducts = catchAsync(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    status: 'success',
    timeOfRequest: req.requestTime,
    results: products.length,
    data: {
      products,
    },
  });
});

exports.addProduct = catchAsync(async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      product: newProduct,
    },
  });
});

exports.getProductById = catchAsync(async (req, res) => {
  const foundProduct = await Product.findById(req.params.id);
  if (foundProduct) {
    res.status(200).json({
      status: 'success',
      data: {
        product: foundProduct,
      },
    });
  } else {
    res.status(404).json({
      status: 'not found',
    });
  }
});

exports.updateProduct = catchAsync(async (req, res) => {
  const update = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  if (update) {
    res.status(200).json({
      status: 'success update',
      data: {
        product: update
      }
    });
  } else {
      res.status(404).json({
        status: 'not found',
    });
  }
});

exports.deleteProductById = catchAsync(async (req,res) => {
  const foundProduct = await Product.findByIdAndDelete(req.params.id);
    if(foundProduct){
        res.status(200).json({
        status: "success",
        data:{
          product: foundProduct
        }
      });
    } else {
      res.status(400).json({
        status: "not found",
      });
    }
  })
