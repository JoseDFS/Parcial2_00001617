var mongoose  = require( 'mongoose' );
var delito = require('../models/delitos');

delitoController={};

delitoController.index =  function(req,res,next) {
    delito.find({},function(err,delitos){
        if (err) return res.json(err);
        return res.json(delitos);
    });
};

module.exports = delitoController;