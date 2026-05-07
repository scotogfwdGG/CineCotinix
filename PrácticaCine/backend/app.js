const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const indexRoute = require("./Routes/IndexRoute");
const peliculaRoute = require("./Routes/PeliculaRoute");
const salaRoute = require("./Routes/SalaRoute");
const tipoSalaRoute = require("./Routes/TipoSalaRoute");

app.use("/index", indexRoute);
app.use("/pelicula", peliculaRoute);
app.use("/sala", salaRoute);
app.use("/tiposala", tipoSalaRoute);


const PORT = 3000;

app.listen(PORT, () =>
        {
            console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
        });