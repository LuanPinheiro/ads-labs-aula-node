const service = require("../services/pessoa")

function list(req, res) {
    service.list(req.query)
        .then((pessoas) => {
            return res.send({ dados: pessoas })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function create(req, res) {
    service.create(req.body)
        .then((pessoaCriada) => {
            return res.status(201).send({
                message: "Nova pessoa criada com sucesso",
                pessoa: pessoaCriada
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function update(req, res) {
    service.update(req.params.id, req.body)
        .then((pessoaEditada) => {
            return res.send({
                message: "Pessoa editada com sucesso",
                pessoa: pessoaEditada
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

function remove(req, res) {
    service.remove(req.params.id)
        .then((pessoaRemovida) => {
            return res.send({
                message: "Pessoa removida com sucesso",
                pessoa: pessoaRemovida
            })
        }, (error) => {
            return res.status(500).send({ message: error })
        })
}

module.exports = { list, create, update, remove }