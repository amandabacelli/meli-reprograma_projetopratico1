const tarefas = require('../model/tarefas.json')

exports.get = (req, res) => {
    res.status(200).send(tarefas)
}
exports.getIdTask = (req, res) => {
    const id = req.params.id
    if(id > 8 || id <= 0) {
        res.status(404).send("Tarefa não encontrada")
    } else {
        res.status(200).send(tarefas.find(element => element.id == id))
    }
    
}