import express, { json } from 'express';          // Importa o Express
const app = express();                       // Cria a aplicação
import tarefasRouter from './routes/tarefas'; // Importa as rotas de tarefas

app.use(json()); // Middleware para aceitar JSON no body

app.use('/tarefas', tarefasRouter); // Quando acessar /tarefas, use esse conjunto de rotas

// Rota inicial só para teste
app.get('/', (req, res) => {
  res.send('Bem-vindo à TaskHero API!');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000 🚀');
});
