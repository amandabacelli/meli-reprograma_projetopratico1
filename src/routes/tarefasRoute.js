const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get('/', controller.get)
router.get('/concluidas', controller.getConcluidos)
router.get('/concluidas/data', controller.getTarefasOrganizadas)
router.get('/:id', controller.getIdTask)
router.get('/colaborador/:nome', controller.getColaborador)

module.exports = router