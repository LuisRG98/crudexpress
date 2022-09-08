const fs = require('fs');
const Product = require("../models/Product");

exports.getAllProducts = async(req,res) => {
    // const products = JSON.parse(fs.readFileSync(`${__dirname}/../data/products.json`));
  
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      results: products.length,
      data:{
        products
      }
    });
  }
  
  exports.addProduct = async(req, res) => {
    const newProduct = await Product.create(req.body);
    
    res.status(200).json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  }
  
exports.getProductById = async(req,res) => {
    const foundProduct = await Product.findById(req.params.id);
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
  }

exports.deleteProductById =async (req,res) => {
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
  }

  exports.updateProduct = async(req,res) => {
    const foundProduct = await Product.findByIdAndUpdate(req.params.id);
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
  }