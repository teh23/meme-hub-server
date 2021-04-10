var express = require('express')
var router = express.Router()

var mems_controller = require('../controllers/mems.js')

// /api/mems/*
router.get("/", mems_controller.index);

router.get("/:id", mems_controller.getByIdMem)

router.post("/", mems_controller.addMem)

router.put("/:id", mems_controller.editMem)

router.delete("/:id", mems_controller.deleteMem)

module.exports = router