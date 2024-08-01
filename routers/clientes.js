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

// 1. selecionando apenas 1 cliente

clientesRouter.get("/clientes", async (req, res) => {
    const listaClientes = await Cliente.findAll();
    res.json(listaClientes);
  });
  

//2. selecionando vários clientes
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


  // UPDATE (PUT):
  clientesRouter.put("/clientes/:id", async (req, res) => {
    const idCliente = req.params.id;
    const { nome, email, telefone, pet, reserva } = req.body;

    try {
      const cliente = await Cliente.findByPk(idCliente);
      if (cliente) {
        await Reserva.update(reserva, { where: { clienteId: idCliente } });
        await cliente.update({ nome, email, telefone, pet });
        res.json({ message: "Cliente atualizado com sucesso!" });
      } else {
        res.status(404).json({ message: "Cliente não encontrado!" });
      }
    } catch (err) {
      res.status(500).json({ message: "Um erro aconteceu: " + err });
    }
  })



  //DELETE
  clientesRouter.delete("/clientes/:id", async (req, res) => {
    const idCliente = req.params.id;
  
    try {
      const cliente = await Cliente.findOne({ where: { id: idCliente } });
  
      if (cliente) {
        await cliente.destroy();
        res.json({ message: "Cliente removido com sucesso." });
      } else {
        res.status(404).json({ message: "Cliente não encontrado." });
      }
    } catch (err) {
      res.status(500).json({ message: "Um erro ocorreu ao excluir cliente" });
    }
  });
  