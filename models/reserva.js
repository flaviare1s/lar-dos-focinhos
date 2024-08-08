import { connection } from "../config/database.js";
import { DataTypes, ENUM } from "sequelize";

export const Reserva = connection.define('reserva', {
    dataInicio: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    dataTermino: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    statusReserva: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    tipoAcomodacao: {
        type: ENUM("deluxe", "standard"),
        allowNull: false,
    },
});
