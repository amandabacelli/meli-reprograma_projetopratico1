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
exports.getConcluidos = (req,res) => {
    const taskConcluido = tarefas.filter(element => element.concluido == "true")
     res.status(200).send(taskConcluido)
}

exports.getColaborador = (req,res) => {
    const nome = req.params.nome
    res.status(200).send(tarefas.filter(element => element.nomeColaborador == nome))
}

exports.getTarefasOrganizadas = (req, res) => {
    const tarefasOrganizadas = tarefas.sort((a,b) => {
        return a.dataConlusao - b.dataConlusao
    })
    console.log(tarefas.dataConlusao)
  
    res.status(200).send(tarefasOrganizadas)
}