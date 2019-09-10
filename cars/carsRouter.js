const express = require("express");
const router = express.Router();
const db = require('./carsHelper');
// const { validateAccountID, validateAccountBody } = require("../middleware/validation")

router.use(express.json());

router.get('/', (req, res) => {
    db.get()
        .then(car => {
            res.status(200).json(car)
        })
})

module.exports = router;