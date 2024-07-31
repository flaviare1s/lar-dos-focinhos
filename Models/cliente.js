import { connection } from '../config/database.js'
import { DataTypes } from 'sequelize' 
import { Reserva } from './reserva.js'
import { Pet } from './pet.js'

export const Cliente = connection.define('cliente', {
  nome: {
    type: DataTypes.STRING(130), 
    allowNull: false, 
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
})

Cliente.hasOne(Pet, { onDelete: 'CASCADE'})
Pet.belongsTo(Cliente) 


Cliente.hasMany(Reserva, { onDelete: 'CASCADE' })
Reserva.belongsTo(Cliente) 
