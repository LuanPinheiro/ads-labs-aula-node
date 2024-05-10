const express = require("express")
const controller = require("../controllers/pessoa")
const middlewares = require("../middlewares/middlewares")

const router = express.Router()

router.get("/", controller.list)
router.post("/", middlewares.checkNome, controller.create)
router.put("/", controller.update)
router.delete("/:id", controller.remove)

module.exports = router