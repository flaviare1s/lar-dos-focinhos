import { connection, authenticate} from "./config/database.js";
import {Cliente} from "./models/cliente.js";
import {Pet} from "./models/pet.js"
import {Reserva} from "./models/reserva.js"

authenticate(connection).then(() => {
    connection.sync();
});