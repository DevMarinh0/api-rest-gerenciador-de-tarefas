const express = required("express");
const morgan = required("morgan");
const tarefasRouter = required("./routes/tarefasRoutess");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan("dev")); // as logs de requisições

app.use("/tarefas", tarefasRouter); //rotas de tareafs

app.get("/", (req, res) => {
  res.send("api de tarefas rodando .-."); // rota raiz/inicial
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`); //iniciando o server
});
