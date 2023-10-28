const express = require("express");
const router = express.Router();

const perguntasController = require("./controllers/perguntasController")

router.get('/perguntas/:idFase', perguntasController.buscarPerguntas)

module.exports = router;