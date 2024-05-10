require("dotenv").config({ path: ".env"})
const express = require("express")
const pessoaRouter = require("./routes/pessoa")

require("./database/database")

const app = express()
app.use(express.json())
app.use("/pessoa", pessoaRouter)

app.listen(process.env.PORT, console.log(`Servidor escutando na porta ${process.env.PORT}`))

module.exports = app