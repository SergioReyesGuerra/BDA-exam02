var express = require('express');
var router = express.Router();

var paciente = require('../controllers/PacienteController.js');

router.get('/', paciente.list);
router.get('/show/:id', paciente.show);
router.get('/create', paciente.create);
router.post('/save', paciente.save);
router.get('/edit/:id', paciente.edit);
router.post('/update/:id', paciente.update);
router.post('/delete/:id', paciente.delete);

module.exports = router;
