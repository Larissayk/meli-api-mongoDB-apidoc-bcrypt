const Clientes = require("../model/clientes");

//GET

//Rota /clientes
exports.get = (req, res) => {
  Clientes.find(function(err, clientes) {
    if (err) res.status(500).send(err);
    res.status(200).send(clientes);
  });
};

//Rota/clientes por req.query
// exports.get = (req, res) => {
//   const filter = req.query;
//   Clientes.find(filter, function(err, clientes) {
//     if (err) res.status(500).send(err);
//     res.status(200).send(clientes);
//   });
// };

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

//Outra forma de fazer
// exports.getCompradores = (req, res) => {
//   Clientes.find({ comprou: true }, function(err, clientes) {
//     if (err) return res.status(500).send(err);
//     const compradores = clientes.map(cliente => {
//       return {
//         nome: cliente.nome,
//         email: cliente.email
//       };
//     });
//     res.status(200).send(compradores);
//   });
// };

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


//PUT

//Rota/usuarios/edit/:id
exports.updateCliente = (req, res) => {

  const usuarioCpf = req.params.cpf;

  Clientes.updateOne(
    { cpf: usuarioCpf },
    { $set: req.body },
    function(err, cliente) {
      if (err) res.status(500).send(err);
      if (!cliente) {
        return res.status(404).send({
          message: `Não foi possível localizar o usuário de CPF: ${usuarioCpf}`
        });
      }
      console.log(cliente.nome)
      res.status(200).send({
        status: "ativo",
        mensagem: `Cliente(a) ${cliente.nome} atualizado(a) com sucesso!`
      });
    }
  );
};

//DELETE
exports.deleteCliente = (req, res) => {
  const clienteCpf = req.params.cpf;
  Clientes.findOne({cpf:clienteCpf},function(err, cliente){
    if (err) res.status(500).send(err);
    if (!cliente) {
      return res.status(404).send({
        message: `Não foi possível localizar o usuário de CPF: ${clienteCpf}`
      });
    }
    cliente.remove(function(err) {
      if (!err) {
        res.status(204).send({ message: `Cliente removido com sucesso` });
      }
    }); 
  })
}
