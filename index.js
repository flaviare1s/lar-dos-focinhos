import { connection, authenticate} from "./config/database.js";
import {Cliente} from "./models/cliente.js";
import {Pet} from "./models/pet.js"
import {Reserva} from "./models/reserva.js"
import express from 'express'

authenticate(connection).then(() => {
    connection.sync();
});

const app = express();

app.use(express.json());

// CRUD:
// CREATE (POST):
app.get("/clientes", async (req, res) => {
    const listaClientes = await Cliente.findAll();
    res.json(listaClientes);
  });
  

// READ (GET):

//selecionando apenas 1 cliente


//selecionando vários clientes
app.get("/clientes/:id", async (req, res) => {
    const cliente = await Cliente.findOne({
      where: { id: req.params.id },
      include: [Reserva],
    });
  
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ message: "Cliente não encontrado!" });
    }
  });

// UPDATE (PUT):


// DELETE (DELETE):



app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001/')
  })
  