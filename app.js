const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const signRouter = require('./routes/signup.route');

//iniciar app
const app = express();
//condicional de ambiente desarrollo sino no se ejecuta.
if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors());

//RUTAS
app.use('/api/v1/', signRouter);

module.exports = app;