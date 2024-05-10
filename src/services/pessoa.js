const Pessoa = require("../models/pessoa")

async function list(queryParams) {
    return await Pessoa.findAll({ where: queryParams })
}

async function create(dados) {
    const novaPessoa = await Pessoa.create(dados)

    return novaPessoa
}

async function update(idPessoa, dados) {
    const pessoaEncontrada = await Pessoa.findByPk(idPessoa)

    pessoaEncontrada.nome = dados.nome ?? pessoaEncontrada.nome
    pessoaEncontrada.data_nascimento = dados.data_nascimento ?? pessoaEncontrada.data_nascimento
    await pessoaEncontrada.save();

    return pessoaEncontrada
}

async function remove(idPessoa) {
    const pessoaEncontrada = await Pessoa.findByPk(idPessoa)

    await pessoaEncontrada.destroy()
}

module.exports = { list, create, update, remove }