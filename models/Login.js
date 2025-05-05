const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    clave: { type: String, required: true }
});

const Login = mongoose.model('Login', LoginSchema, 'Logins'); 

module.exports = Login;