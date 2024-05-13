const Email = require("../models/email")

async function list(queryParams) {
    return await Email.findAll({ where: queryParams })
}

async function create(dados) {
    const novoEmail = await Email.create(dados)

    return novoEmail
}

async function update(idEmail, dados) {
    const emailEncontrado = await Email.findByPk(idEmail)

    if(emailEncontrado){
        emailEncontrado.email = dados.email ?? emailEncontrado.email
        emailEncontrado.pessoaId = dados.pessoaId ?? emailEncontrado.pessoaId
        await emailEncontrado.save();
    }

    return emailEncontrado
}

async function remove(idEmail) {
    const emailEncontrado = await Email.findByPk(idEmail)
    if(emailEncontrado)
        await emailEncontrado.destroy()

    return emailEncontrado
}

module.exports = { list, create, update, remove }