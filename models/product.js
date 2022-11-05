const mongoose = require('mongoose');
var ProductSchema= new mongoose.Schema({
    Name:String,
    ID: Number,
    Quantity: Number
})

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;