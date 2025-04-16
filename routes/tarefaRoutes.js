const express = require('express');
const router = express.Router();
const { listarTarefas } = require('../controllers/tarefaController');

// Rota para listar tarefas
router.get('/tarefas', listarTarefas);

module.exports = router;
