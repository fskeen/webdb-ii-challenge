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
        .catch(err => {
            res.status(500).json({
                message: "Unable to get car list.",
                error: err
            })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.getById(id)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            res.status(500).json({
                message: "Unable to get that car.",
                error: err
            })
        })
})

router.post('/', (req, res) => {
    const car = req.body;
    db.insert(car)
    .then(car => {
        res.status(201).json(car)
    })
    .catch(err => {
        res.status(500).json({
            message: "Unable to add car to database.",
            error: err
        })
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db.update(id, changes)
        .then(edited => {
            res.status(200).json({message: "Record updated!"})
        })
        .catch(err => {
            res.status(500).json({
                message: "Unable to edit that record.",
                error: err
            })
        })
})

module.exports = router;