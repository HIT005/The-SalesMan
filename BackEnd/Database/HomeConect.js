const mongoose = require("mongoose");

const salersSchema = new mongoose.Schema({
name:String,
city:String
});
module.exports = mongoose.model("area",salersSchema);