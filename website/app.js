const methodOverride =  require('method-override');
const express = require("express");

const app = express();
app.use(methodOverride('_method'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.listen (3000, () =>
console.log ("Servidor corriendo en puerto 3000")
);

const apiRouter = require("./routes/api");

app.use("/api", apiRouter);