var express = require("express")
var router = express.Router()

var userControllers = require("../controllers/users.js")

router.get("/", userControllers.index)
router.get("/:id", userControllers.index)
router.post("/", userControllers.index)
router.put("/:id", userControllers.index)
router.delete("/:id", userControllers.index)


module.exports = router