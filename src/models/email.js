const database = require("../database/database")
const Sequelize = require("sequelize")
const Pessoa = require("./pessoa")

const Email = database.define("emails", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: Sequelize.STRING
}, {
    timestamp: true
})

Email.belongsTo(Pessoa)

module.exports = Email