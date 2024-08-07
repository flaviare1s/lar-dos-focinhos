import { Cliente } from "../models/cliente.js";
import { Reserva } from "../models/reserva.js";
import { Pet } from "../models/pet.js";
import { Router } from "express";

export const reservasRouter = Router();

// CRUD RESERVAS:
// CREATE (POST):
reservasRouter.post("/reservas", async (req, res) => {
  const { dataInicio, dataTermino, statusReserva, tipoAcomodacao, clienteId, petId } = req.body;

  try {
    const cliente = await Cliente.findByPk(clienteId);

    if (cliente && petId) {
      await Reserva.create({ dataInicio, dataTermino, statusReserva, tipoAcomodacao, clienteId, petId });
      res.json({ message: "Reserva criada com sucesso!" });
    } else {
      res.status(404).json({ message: "Cliente não encontrado!" });
    }
  } catch (err) {
    res.status(500).json({ message: "Um erro aconteceu: " + err });
  }
})

//READ (GET):
reservasRouter.get("/reservas", async (req, res) => {
  const listaReservas = await Reserva.findAll({
    include: [
      {model: Cliente, attributes: ["nome", "telefone"]},
      {model: Pet, attributes: ["nome"]}
    ],
  });
  res.json(listaReservas);
})

reservasRouter.get("/reservas/:id", async (req, res) => {
  const reserva = await Reserva.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: [
      {model: Cliente, attributes: ["nome", "telefone"]},
      {model: Pet, attributes: ["nome"]}
    ],
  });
  if (reserva) {
    res.json(reserva);
  } else {
    res.status(404).json({ message: "Reserva não encontrada!" });
  }
})

// UPDATE (PUT):
reservasRouter.put("/reservas/:id", async (req, res) => {
  const { dataInicio, dataTermino, statusReserva, tipoAcomodacao, clienteId, petId } = req.body;

  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (reserva) {
      await reserva.update({ dataInicio, dataTermino, statusReserva, tipoAcomodacao, clienteId, petId });
      res.json({ message: "Reserva atualizada com sucesso!" });
    } else {
      res.status(404).json({ message: "Reserva não encontrada!" });
    }
  } catch (err) {
    res.status(500).json({ message: "Um erro aconteceu: " + err });
  }
})

// DELETE (DELETE):
reservasRouter.delete("/reservas/:id", async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (reserva) {
      await reserva.destroy()
      res.json({ message: "Reserva excluída com sucesso!" });
    } else {
      res.status(404).json({ message: "Reserva não encontrada!" });
    }
  } catch (err) {
    res.status(500).json({ message: "Um erro aconteceu: " + err });
  }
})