var mongoose = require('mongoose');
var paciente = require("../models/Paciente");

var PacienteController = {};

PacienteController.list = function(req, res) {
    paciente.find({}).exec(function(err, pacientes) {
        if (err) { console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/paciente/index', {pacientes: pacientes, titulo: 'INDEX'});
    });
};

PacienteController.show = function(req, res) {
    paciente.findOne({_id: req.params.id}).exec(function(err, paciente) {
        if (err) { console.log('Error: ', err); return; }
        res.render('../views/paciente/show', {paciente: paciente});
    });
};

PacienteController.create = function(req, res) {
    res.render('../views/paciente/create');
};

PacienteController.save = function(req, res) {
    var nuevoPaciente = new paciente(req.body);
    
    nuevoPaciente.save(function(err) {
        if (err) { console.log('Error: ', err); return; }
        console.log("Successfully created a paciente. :)");
        res.redirect("/paciente/show/" + nuevoPaciente._id);
    });
};

PacienteController.edit = function(req, res) {
    paciente.findOne({_id: req.params.id}).exec(function(err, paciente) {
        if (err) { console.log("Error:", err); return; }
        res.render("../views/paciente/edit", {paciente: paciente});
    });
};

PacienteController.update = function(req, res) {
    paciente.findByIdAndUpdate(req.params.id, {
        $set: {
            idpaciente: req.body.idpaciente,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            login: req.body.login,
            password: req.body.password,
            movil: req.body.movil,
            correo: req.body.correo,
            direccion: req.body.direccion
        }
    }, { new: true },
    function(err, paciente) {
        if (err) {
            console.log('Error: ', err);
            res.render('../views/paciente/edit', {paciente: req.body});
        }
        console.log(paciente);
        res.redirect('/paciente/show/' + paciente._id);
    });
};

PacienteController.delete = function(req, res) {
    paciente.remove({_id: req.params.id}, function(err) {
        if (err) { console.log('Error: ', err); return; }
        console.log("Paciente eliminado");
        res.redirect("/paciente");
    });
};

module.exports = PacienteController;
