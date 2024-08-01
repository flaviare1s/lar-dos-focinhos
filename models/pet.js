import { connection } from "../config/database.js"
import { DataTypes } from "sequelize"
import { Reserva } from "./reserva.js"

export const Pet = connection.define('pet', {
  nome: {
    type: DataTypes.STRING(90),
    allowNull: false,
  },
  raça: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  dataNasc: {
    type: DataTypes.DATEONLY,
  },
})

Pet.hasOne(Reserva, { onDelete: 'CASCADE' })
Reserva.belongsTo(Pet)
