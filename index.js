import { connection, authenticate} from "./config/database.js";
import express from 'express';
import { clientesRouter } from "./routers/clientes.js";
//import { petsRouter } from "./routes/pets.js";


authenticate(connection).then(() => {
    connection.sync();
});

const app = express();

app.use(express.json());

//Rotas 
app.use(clientesRouter);
//app.use(petsRouter);



app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001/')
  })
  