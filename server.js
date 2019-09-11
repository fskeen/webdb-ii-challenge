const express = require('express');
const carsRouter = require("./cars/carsRouter")
const salesRouter = require("./sales/salesRouter")

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter)
server.use('/api/sales', salesRouter)

module.exports = server;