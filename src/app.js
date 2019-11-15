const express = require("express");
const mongoose = require("mongoose");
const app = express();

//conversor
app.use(express.json());
//app.use(bodyParser.json());

//conexão com o MongoDB
mongoose.connect("mongodb://localhost:27017/clientes", {
  useNewUrlParser: true
});

let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Conexão com o MongoDB estabelecida com sucesso!");
});

//headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//rotas
const index = require("./routes/index");
const clientes = require("./routes/clientesRoute")

app.use("/", index);
app.use("/clientes", clientes);

module.exports = app;
