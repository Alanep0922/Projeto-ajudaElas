const express = require("express");
const router = express.Router();
const controller = require("../controllers/voluntariaController")
const authController = require("../controllers/authController")
const { checkAuth } = require("../middlewares/auth");


router.post("/criarvoluntaria", controller.criarVoluntaria)
router.get("/buscartodas", controller.buscarTodasVoluntarias)
router.get("/buscarporid/:id", controller.buscarVoluntariaPorId)
router.delete("/deletar/:id", checkAuth, controller.deletarVoluntaria)
router.patch("/atualizar/:id",checkAuth, controller.atualizarVoluntaria)
router.post("/login", authController.login);



module.exports = router