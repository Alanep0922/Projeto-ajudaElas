
const express = require("express");
const router = express.Router();
const controller = require("../controllers/beneficiadasController")


router.post("/criarbeneficiadas", controller.criarBeneficiada)
router.get("/buscartodas", controller.buscarTodasBeneficiadas)
router.get("/buscarporid/:id", controller.buscarBeneficiadaPorId)
router.delete("/deletar/:id", controller.deletarBeneficiada)
router.patch("/atualizar/:id", controller.atualizarBeneficiada)

module.exports = router