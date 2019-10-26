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
    const tarefasOrganizadas = tarefas.sort(a,b => {
        return(
            //não vai aparecer no json, somente no código; o new date recebe (ano, mes, dia) precisa organizar a data pra isso

            new Date (
                b.dataInclusao.split("/")[2], 
                b.dataInclusao.split("/")[1],
                dataInclusao.split("/"[0])
            ) - //quando quero que tenha mais de um return poe o '-'
            new Date (
                a.dataInclusao.sort("/")[2],
                a.dataInclusao.split("/")[1],
                a.dataInclusao.split("/"[0])
            )
        )

    })
    
    res.status(200).send(tarefasOrganizadas)

    }

exports.getDiferencaDias = (req,res) => {
    tarefas.forEach(element => {
      const diferenca = Math.abs(
            new Date (
                element.dataConclusao.split("/")[2],
                element.dataConclusao.split("/")[1],
                element.dataConclusao.split("/")[0]
            ) -
            new Date (
                element.dataInclusao.split("/")[2],
                element.dataInclusao.split("/")[1],
                element.dataInclusao.split("/")[0]

            )
        )
        const diferencaDias = Math.ceil(diferenca / (1000*60*60*24))
        element.tempoLevado = diferencaDias
    })
    res.status(200).send(tarefas)
}
    