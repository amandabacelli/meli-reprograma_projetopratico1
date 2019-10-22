const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get('/', controller.get)
router.get('/:id', controller.getIdTask)

module.exports = router