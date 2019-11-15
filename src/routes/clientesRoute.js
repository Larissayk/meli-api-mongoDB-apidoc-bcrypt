const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientesController");

//Rotas GET
router.get("/", controller.get);
router.get("/compradores", controller.getCompradores);
router.get("/:cpf", controller.getClientesPorCpf)

//Rotas POST
router.post("/", controller.post)

module.exports = router;
