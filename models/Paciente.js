var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PacienteSchema = new Schema({
    idpaciente: {type: String, required: true, max: 50},
    login: {type: String, required: true, max: 30},
    password: {type: String, required: true, max: 30},
    apellidos: {type: String, required: true, max: 20},
    nombres: {type: String, required: true, max: 20},
    movil: {type: String, required: true, max: 9},
    correo: {type: String, required: true, max: 30},
    direccion: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('Paciente', PacienteSchema);

