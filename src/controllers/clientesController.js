const Clientes = require("../model/clientes");

//GET

//Rota /clientes
exports.get = (req, res) => {
  Clientes.find(function(err, clientes) {
    if (err) res.status(500).send(err);
    res.status(200).send(clientes);
  });
};

//Rota /clientes/compradores
exports.getCompradores = (req, res) => {
  Clientes.find({ comprou: true }, function(err, clientes) {
    if (err) return res.status(500).send(err);
    console.log(clientes);
    const compradores = clientes.map(({ nome, email }) => ({ nome, email })); //usar o object destructuring
    console.log(compradores);
    res.status(200).send(compradores);
  });
};

//Rota /clientes/:cpf
exports.getClientesPorCpf = (req, res) => {
  const clienteCpf = req.params.cpf;
  // console.log(clienteCpf);
  Clientes.find({ cpf: clienteCpf }, function(err, clientes) {
    if (err) return res.status(500).send(err);
    console.log(clientes);
    res.status(200).send(clientes);
  });
};

//POST

// Rota /clientes
exports.post = (req, res) => {
  let cliente = new Clientes(req.body);

  cliente.save(function(err) {
    if (err) res.status(500).send(err);

    res.status(201).send({
      status: true,
      mensagem: `Cliente ${cliente.nome} incluído(a) com sucesso!`
    });
  });
};
