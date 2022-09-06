const fs = require('fs');

exports.getAllProducts = (req,res) => {
    const products = JSON.parse(fs.readFileSync(`${__dirname}/../data/products.json`));
  
    res.status(200).json({
      status: "success",
      results: products.length,
      data:{
        products
      }
    });
  }
  
  exports.addProduct = (req, res) => {
    const products = JSON.parse(
      fs.readFileSync(`${__dirname}/../data/products.json`)
    );
    products.push(req.body);
    fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(products));
  
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  }
  
exports.getProductById = (req,res) => {
    const products = JSON.parse(fs.readFileSync(`${__dirname}/../data/products.json`));
    const foundProduct = products.find(p => p.id == req.params.id);
    if(foundProduct){
        res.status(200).json({
        status: "success",
        results: products.length,
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

exports.deleteProductById = (req,res) => {
  const products = JSON.parse(fs.readFileSync(`${__dirname}/../data/products.json`));
  newProducts = products.filter(p => p.id != req.params.id);
  console.log(products);
  fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(newProducts));
      res.status(200).json({
      status: "success",
      results: products.length,
      data:{
        product: products
      }
    });
  }

  exports.updateProduct = (req,res) => {
    var products = JSON.parse(fs.readFileSync(`${__dirname}/../data/products.json`));
    var foundProduct = products.findIndex(p => p.id == req.params.id);
    if(foundProduct != -1){
        products[foundProduct].name = req.body.name;
        products[foundProduct].price = req.body.price;
        products[foundProduct].category = req.body.category;
        fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(products));
        res.status(200).json({
        status: "success",
        results: products.length,
        data:{
          product: products
        }
      });
    } else {
      res.status(400).json({
        status: "not found",
      });
    }
    }