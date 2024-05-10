const database = require("../database/database")
const Sequelize = require("sequelize")

const Pessoa = database.define("pessoas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: Sequelize.STRING,
    data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
}, {
    timestamp: true
})

module.exports = Pessoa