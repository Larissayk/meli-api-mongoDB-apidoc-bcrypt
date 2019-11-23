const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientesController");

//apidoc -i src/ -o public/apidoc

//GET
/**
 * @api {get} /clientes
 * @apiGroup Clientes
 * * 
 * @apiSuccess {Object[]} clientes Lista de Clientes
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *       "email": "Cindy@gmail.com",
 *       "nome": "Cindy ",
 *       "cpf": 2234567890,
 *       "dataNascimento": "1992-04-03T03:00:00.000Z",
 *       "estadoCivil": "Solteira",
 *       "telefone": 444456789,
 *       "comprou": true
 *   }]
 *
 */




//Rotas GET
router.get("/", controller.get);
router.get("/compradores", controller.getCompradores);
router.get("/:cpf", controller.getClientesPorCpf);

//Rotas POST
router.post("/", controller.post);

//Rotas PUT
router.put("/:cpf", controller.updateCliente);

//Rota DELETE
router.delete("/:cpf", controller.deleteCliente);

//Rotas PUT
router.put("/:cpf", controller.updateClientePorCpf)

module.exports = router;
