import { connection } from "../config/database.js"
import { DataTypes } from "sequelize"

export const Cachorro = connection.define('cachorro', {
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
