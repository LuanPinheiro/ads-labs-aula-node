const database = require("../database/database")
const Sequelize = require("sequelize")

const Pessoas = database.define("pessoas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: Sequelize.STRING,
    data_nascimento: Sequelize.DATEONLY
}, {
    timestamp: true
})

module.exports = Pessoas