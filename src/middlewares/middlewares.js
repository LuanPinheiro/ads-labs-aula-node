function checkNome (req, res, next) {
    if(!req.body.nome)
        return res.status(400).send({ message: "Por favor envie o nome da pessoa"})

    return next()
}

module.exports = { checkNome }