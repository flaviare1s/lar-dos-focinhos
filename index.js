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


// READ (GET):


// UPDATE (PUT):


// DELETE (DELETE):



app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001/')
  })
  