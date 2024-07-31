import { connection, authenticate} from "./config/database.js";
import {Cliente} from "./models/cliente.js";
import {Pet} from "./models/pet.js"
import {Reserva} from "./models/reserva.js"

authenticate(connection).then(() => {
    connection.sync();
});

const app = express();

app.use(express.json());

// CRUD:
// CREATE (POST):


// READ (GET):


// UPDATE (PUT):


// DELETE (DELETE):



app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000/')
  })
  