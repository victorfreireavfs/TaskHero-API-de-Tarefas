const tarefas = require('../models/tarefaModel');

function listarTarefas(req, res) {
  res.status(200).json(tarefas); // Retorna as tarefas como JSON
}

module.exports = {
  listarTarefas
};
