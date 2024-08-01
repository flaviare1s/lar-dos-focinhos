import {Cliente} from "../models/cliente.js";
import {Reserva} from "../models/reserva.js";
import {Router} from "express";

export const clientesRouter = Router();

// CRUD:
// CREATE (POST):
clientesRouter.post("/clientes", async (req, res) => {
    const { nome, email, telefone, pet, reserva } = req.body;

    try {
        await Cliente.create(
            { nome, email, telefone, reserva },
            { include: [Reserva] }
        )
        res.json({ message: "Cliente cadastrado com sucesso!" })
    } catch(err) {
        res.status(500).json({ message: "Um erro aconteceu: " + err })
    }
})

// READ (GET):

//selecionando apenas 1 cliente

clientesRouter.get("/clientes", async (req, res) => {
    const listaClientes = await Cliente.findAll();
    res.json(listaClientes);
  });
  

//selecionando vários clientes
clientesRouter.get("/clientes/:id", async (req, res) => {
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
