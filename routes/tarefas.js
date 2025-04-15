// routes/tarefas.js 🟢 GET / — listar todas as tarefas

const express = require('express'); // Importa o Express
const router = express.Router();    // Cria um mini app para rotas
let tarefas = require('../data/tarefasFake'); // Importa as tarefas

// 🔍 GET /:id — buscar tarefa por ID
router.get('/', (req, res) => {
    res.json(tarefas); // Envia todas as tarefas como JSON
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id); // Converte o ID da URL em número
    const tarefa = tarefas.find(t => t.id === id); // Procura a tarefa pelo ID
  
    if (!tarefa) {
      return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }
  
    res.json(tarefa);
});

// ➕ POST / — criar nova tarefa
router.post('/', (req, res) => {
    const { titulo, concluida } = req.body; // Pega os dados enviados no corpo da requisição
  
    const novaTarefa = {
      id: tarefas.length + 1, // Gera um ID simples
      titulo,
      concluida: concluida || false // Se não vier nada, assume false
    };
  
    tarefas.push(novaTarefa); // Adiciona no array
    res.status(201).json(novaTarefa); // Retorna a nova tarefa criada
  });
  

//   ✏️ PUT /:id — editar tarefa
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, concluida } = req.body;
  
    const tarefa = tarefas.find(t => t.id === id);
    if (!tarefa) {
      return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }
  
    // Atualiza os dados
    tarefa.titulo = titulo !== undefined ? titulo : tarefa.titulo;
    tarefa.concluida = concluida !== undefined ? concluida : tarefa.concluida;
  
    res.json(tarefa);
  });

  
// ❌ DELETE /:id — remover tarefa
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tarefas = tarefas.filter(t => t.id !== id); // Remove do array
    res.status(204).send(); // Código 204 = sem conteúdo
});

// 🔁 Exporta as rotas
module.exports = router;
