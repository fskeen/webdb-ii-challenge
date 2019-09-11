const express = require("express");
const router = express.Router();
const db = require('./salesHelper');
// const { validateAccountID, validateAccountBody } = require("../middleware/validation")

router.use(express.json());

router.get('/', (req, res) => {
    db.get()
        .then(sale => {
            res.status(200).json(sale)
        })
        .catch(err => {
            res.status(500).json({
                message: "Unable to get sale list.",
                error: err
            })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.getById(id)
        .then(sale => {
            res.status(200).json(sale)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Unable to get that sale.",
                error: err
            })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.getByIdPlusCar(id)
        .then(sale => {
            res.status(200).json(sale)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Unable to get that sale.",
                error: err
            })
        })
})

router.post('/', (req, res) => {
    const sale = req.body;
    db.insert(sale)
    .then(sale => {
        res.status(201).json(sale)
    })
    .catch(err => {
        res.status(500).json({
            message: "Unable to add sale to database.",
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

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.remove(id)
        .then(deleted => {
            res.status(200).json({message: "Record deleted!"})
        })
        .catch(err => {
            res.status(500).json({
                message: "Unable to delete that record.",
                error: err
            })
        })
})

module.exports = router;