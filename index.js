const express = require('express');       // Importa o Express
const app = express();                    // Inicializa o app Express
const PORT = 3000;                        // Define a porta do servidor

const tarefaRoutes = require('./routes/tarefaRoutes'); // importa suas rotas


app.use(express.json());   // Middleware para interpretar JSON nas requisições
app.use(tarefaRoutes); // conecta as rotas no app


// Rota simples de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à API TaskHero! 🚀');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});