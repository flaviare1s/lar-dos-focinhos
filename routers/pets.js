import { Cliente } from "../models/cliente.js";
import { Reserva } from "../models/reserva.js";
import { Router } from "express";


export const petsRouter = Router();


// ----- CRUD PETS -----


// CREATE 

petsRouter.post("/clientes", async (req, res) => {
    const { nome, raca, dataNasc } = req.body;

    try {
        await Pet.create(
            { nome, raca, dataNasc },
            { include: [Cliente] }
        )
        res.json({ message: "Pet cadastrado com sucesso!" })
    } catch(err) {
        res.status(500).json({ message: "Um erro aconteceu: " + err })
    }
})
