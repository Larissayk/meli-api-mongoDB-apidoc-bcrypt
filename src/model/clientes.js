const mongoose = require("mongoose");

const clientesSchema = new mongoose.Schema(
  {
    nome: { type: String },
    email: { type: String, required: true },
    cpf: { type: Number },
    dataNascimento: { type: Date },
    estadoCivil: { type: String },
    telefone: { type: Number },
    comprou: { type: Boolean }
  },
  { versionKey: false }
  
);

const Clientes = mongoose.model("Clientes", clientesSchema); //indica que o mongoose está vinculado a um model que tem um Schema. Expõe meu Schema para quem quiser trabalhar com CLientes.

module.exports = Clientes;
