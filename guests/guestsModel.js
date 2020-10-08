const db = require('../data/dbConfig');

module.exports = {
    addGuest,
    removeGuest,
    getAllGuests,
}

async function addGuest(guest) {
    const [id] = await db('guests').insert(guest, 'id');
    return db('guests').where({ id }).first();
}

function removeGuest(id) {
    return db('guests').where('id', id).del();
}

function getAllGuests() {
    return db('guests');
}