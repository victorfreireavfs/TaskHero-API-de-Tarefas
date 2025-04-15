const express = require('express');       // Importa o Express
const app = express();                    // Inicializa o app Express
const PORT = 3000;                        // Define a porta do servidor

app.use(express.json());                 // Middleware para interpretar JSON nas requisições

// Rota simples de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à API TaskHero! 🚀');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});