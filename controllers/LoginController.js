var mongoose = require('mongoose');
var login = require("../models/Login");
const Paciente = require('../models/Paciente');
var LoginController = {};


LoginController.login = function(req, res){
    
    login.find({}).exec(function(err, login){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/login/index', {login: login,titulo:'INDEX'} );
        
    });
    
};

LoginController.show = function(req, res){
    login.findOne({_id: req.params.id}).exec(function(err, login){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/login/show', {login: login} );
    });
    
};




LoginController.edit = function(req, res) {
  login.findOne({_id: req.params.id}).exec(function (err, login) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/login/edit", {login: login});
    
  });
};


LoginController.update = function(req, res){
    login.findByIdAndUpdate( req.params.id, {$set: {
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
        monto: req.body.monto,
        tipo: req.body.tipo,
    }}, { new: true },
    function( err, login){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/login/edit', {login: req.body} );
        }
        
        console.log( login );
        
        res.redirect('/login/show/' + login._id);
        
    });
};



