const mongoose = require('mongoose');

require('dotenv').config()
// console.log(process.env)
mongoose.connect(process.env.mongoose,{useUnifiedTopology:true,useNewUrlParser:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to db'));
db.once('open', function(){
    console.log('Successfully connected to database');
});

exports.db = db;
// Variables and the data types used
