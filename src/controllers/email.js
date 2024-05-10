const service = require("../services/email")

function list(req, res) {
    service.list(req.query)
        .then((emails) => {
            return res.send({ dados: emails })
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