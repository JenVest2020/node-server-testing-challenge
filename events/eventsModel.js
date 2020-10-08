const db = require('../data/dbConfig');

module.exports = {
    addEvent,
    removeEvent,
    getAllEvents,
}

async function addEvent(event) {
    const [id] = await db('events').insert(event, 'id');
    return db('events').where({ id }).first();
}

function removeEvent(id) {
    return db('events').where('id', id).del();
}

function getAllEvents() {
    return db('events');
}