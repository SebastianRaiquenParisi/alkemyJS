const methodOverride =  require('method-override');
const express = require("express");
//db connection
const connection = require("./db/connection");

const PORT  = 3006;

const app = express();
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.listen (PORT, () =>
console.log ("Servidor corriendo en puerto 3000")
);

const apiRouter = require("./routes/apiRouter");

app.use("/api", apiRouter);