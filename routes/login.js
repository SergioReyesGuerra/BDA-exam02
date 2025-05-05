const express = require('express');
const router = express.Router();
const Paciente = require('../models/Paciente'); 
const bcrypt = require('bcryptjs');


router.get('/', (req, res) => {
    res.render('login'); 
});


router.post('/', async (req, res) => {
    const { email, clave } = req.body; 

    try {
        const paciente = await Paciente.findOne({ correo: email }); 
        if (paciente && await bcrypt.compare(clave, paciente.password)) { 
            res.redirect('/paciente'); 
        } else {
            res.render('login/index', { message: 'Datos incorrectos' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
});


module.exports = router;

