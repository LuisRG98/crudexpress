const mongoose = require("mongoose");
const Product = require("./models/Product");
const app = require("./app");
const port = process.env.PORT;

mongoose.connect(process.env.DATABASE, {}).then((con) =>{
    console.log("connected to mongo");
});

app.listen(port, ()=>{
    console.log("holla");
});
