function checkNome (req, res, next) {
    if(!req.body.nome)
        return res.status(400).send({ message: "Por favor envie o nome da pessoa"})

    return next()
}

function checkData (req, res, next) {
    if(!req.body.data_nascimento)
        return res.status(400).send({ message: "Por favor envie a data de nascimento da pessoa"})

    return next()
}

module.exports = { checkNome, checkData }