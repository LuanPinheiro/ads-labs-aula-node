require("dotenv").config({ path: ".env"})
const express = require("express")
const pessoaRouter = require("./routes/pessoa")
const emailRouter = require("./routes/email")

require("./database/database")

const app = express()
app.use(express.json())

app.use("/pessoa", pessoaRouter)
app.use("/email", emailRouter)

app.listen(process.env.PORT, console.log(`Servidor escutando na porta ${process.env.PORT}`))

module.exports = app