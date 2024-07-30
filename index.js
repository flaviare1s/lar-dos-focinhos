import { connection, authenticate} from "./config/database.js";
import {Cliente} from "./models/cliente.js";
import {Cachorro} from "./models/endereco.js"
import {Reserva} from "./models/pet.js"

authenticate(connection).then(() => {
    connection.sync();
});