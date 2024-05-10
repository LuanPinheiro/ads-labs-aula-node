const service = require("../services/pessoa")

function list(req, res) {
    return res.status(200).send({ 
        pessoas: service.list()
    })
}

function create(req, res) {
    return res.status(200).send("Olá")
}

function update(req, res) {
    return res.status(200).send("Olá")
}

function remove(req, res) {
    return res.status(200).send("Olá")
}

module.exports = { list, create, update, remove }