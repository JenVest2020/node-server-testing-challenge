const db = require('../data/dbConfig');

module.exports = {
    addGuest,
    removeGuest,
    getAllGuests,
}

async function addGuest(event) {
    return null;
}

function removeGuest(id) {
    return null;
}

function getAllGuests() {
    return db('guests');
}