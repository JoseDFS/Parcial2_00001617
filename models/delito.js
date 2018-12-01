var mongoose = require('mongoose');
var delito= new mongoose.Schema({
    nombre:{type:String, required:true},
    genero:{type:String, required:true},
    cantidad:{type:Number, required:true}
});

module.exports = mongoose.Schema("delito",delito)