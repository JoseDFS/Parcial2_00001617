var mongoose = require('mongoose');
var delito= new mongoose.Schema({
    nombre:String,
    genero:String,
    cantidad:Number
});

module.exports = mongoose.model("delito",delito)