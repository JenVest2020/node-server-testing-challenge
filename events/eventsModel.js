const db = require('../data/dbConfig');

module.exports = {
    addEvent,
    removeEvent,
    getAllEvents,
}

function addEvent(event) {
    return null;
}

function removeEvent(id) {
    return null;
}

function getAllEvents() {
    return db('events');
}