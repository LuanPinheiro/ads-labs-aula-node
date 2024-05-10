const Email = require("../models/email")

async function list(queryParams) {
    return await Email.findAll({ where: queryParams })
}

function create() {
    return ["Luan", "Camila", "Matheus", "Yuri"]
}

function update() {
    return ["Luan", "Camila", "Matheus", "Yuri"]
}

function remove() {
    return ["Luan", "Camila", "Matheus", "Yuri"]
}

module.exports = { list, create, update, remove }