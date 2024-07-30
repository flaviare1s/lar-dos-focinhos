import { connection, authenticate} from "./config/database.js";
import {Cliente} from "./Models/cliente.js";
import {Cachorro} from "./Models/cachorro.js"
import {Reserva} from "./Models/reserva.js"

authenticate(connection).then(() => {
    connection.sync();
});