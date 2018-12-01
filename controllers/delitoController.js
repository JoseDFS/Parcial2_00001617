var mongoose = require('mongoose');
var delito = require('../models/delitos');

delitoController = {};

delitoController.index = function (req, res, next) {
    delito.find({}, function (err, delitos) {
        if (err) {
            res.statusCode = 500;
            return res.json({
                status: "error"
            });
        }
        res.statusCode = 200;
        return res.json(delitos);
    });
};
delitoController.store = function(req, res, next){
    console.log(req.body);
    let d = new delito();
    d.nombre = req.params.nombre;
    d.genero = req.params.genero;
    d.cantidad = req.params.cantidad;
    
    d.save();
};
delitoController.find =function(req,res){
    
    let id = req.params.id
    console.log(id);
    delito.findById(id,function(err,deli){
        if(err){
            res.statusCode = 500;
            return res.json({
                status: "error"
            });
        }
        if(!deli){
            res.statusCode = 400;
            return res.json({
                status: "no se encontro lo solicitado"
            });
        }
        res.statusCode = 200;
        return res.json(deli);
    });
    
}
delitoController.del =function(req,res){
  
    let id = req.params.id
    console.log(id);
    delito.findByIdAndRemove(id,function(err,deli){
        if(err){
            res.statusCode = 500;
            return res.json({
                status: "error"
            });
        }
        res.statusCode = 200;
        return res.json(deli);
    });
    
}

delitoController.up = function(req,res){
    delito.findByIdAndUpdate(req.params.id, { $set: { nombre: req.params.nombre}}, { new: true }, function (err, del) {
        if (err) return handleError(err);
        res.send(del);
      });
}
module.exports = delitoController;