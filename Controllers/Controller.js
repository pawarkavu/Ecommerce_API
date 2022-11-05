const Product = require("../models/product");

exports.getListOfProducts = (req, res) => {
    Product.find({}, function (err, dat) {
        if (err) throw err;
        let products = dat      
        let data = { products }
        res.json({ data })
    });
}

exports.deleteProduct = (req, res) => {
    // function to delete the product id
    Product.findOneAndDelete({ ID: { $eq: req.params.id } }, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Deleted : ", docs);
            res.json({ data: { message: "product deleted" } })
        }
    });
}

exports.updateProduct = (req, res) => {
    // function to update the quantity for a given product id.
    Product.findOneAndUpdate({ ID: { $eq: req.params.id } },
        { Quantity: req.query.number }, null, function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Updated : ", docs);
                res.json({ data: { product: { name: docs.Name, quantity: req.query.number, id: docs.ID }, message: "updated successfully" } })
            }
        });
}

exports.createProduct = async (req, res) => {
    let data = req.body;
    // let len;
    var len = await Product.find().count();    //len variable to calculate the ID of the product
    console.log(data.product);
    let Name = data.product.name;
    let Quantity = data.product.quantity;
    len++;
    var newProduct = Product({ Name, Quantity, ID: len }).save(function (err, dat) {
        if (err) throw err;
        let product = { name: dat.Name, quantity: dat.Quantity };
        let data = { product }
        res.json({ data });
    });
}