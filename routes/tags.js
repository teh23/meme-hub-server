var express = require('express')
var router = express.Router()

const tagsController = require('../controllers/tags.js')

// /api/mems/*
router.get("/", tagsController.index);

router.get("/title/:title", tagsController.getByTitle)
router.get("/id/:id", tagsController.getById)


router.post("/", tagsController.add)

router.put("/:title", tagsController.edit)

router.delete("/:title", tagsController.delete)

module.exports = router