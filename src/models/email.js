const database = require("../database/database")
const Sequelize = require("sequelize")

const Emails = database.define("emails", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: Sequelize.STRING
}, {
    timestamp: true
})

module.exports = Emails