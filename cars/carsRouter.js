const express = require("express");
const router = express.Router();
const db = require('./carsHelper')
// const { validateAccountID, validateAccountBody } = require("../middleware/validation")

router.use(express.json())

module.exports = router;