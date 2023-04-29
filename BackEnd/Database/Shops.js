const mongoose = require('mongoose');

const ShopSchema = new mongoose.Schema({
    name:String,
    shopno:Number,
    ownername:String  
});
module.exports = mongoose.model("shops",ShopSchema)