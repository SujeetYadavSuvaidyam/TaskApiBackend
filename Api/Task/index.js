const express = require('express');
const router = express.Router()
const crud = require('../Task/Crud')

router.get("/", crud.readData);
router.post("/", crud.createData);
router.put("/:_id", crud.updateData);
router.delete("/:_id", crud.deleteData);


module.exports = router;