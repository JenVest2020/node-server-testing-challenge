const express = require('express');

const Events = require('../events/eventsModel.js');
const eventsRouter = require('../events/eventsRouter');
const Guests = require('../guests/guestsModel.js');
const guestsRouter = require('../guests/guestsRouter');

const server = express();

server.use(express.json());
server.use('/api/events', eventsRouter);
server.use('/api/guests', guestsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: "Let's Party!" });
})


module.exports = server;