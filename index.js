// import express
var express = require("express"); 
var app = express();
let db = require("./mongoose");
let ProductRouter = require("./routes/router")

app.use(express.json());

app.use(ProductRouter);

app.listen(3000,() => {console.log("Listening");});