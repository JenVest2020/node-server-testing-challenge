const router = require('express').Router();
const { response } = require('../api/server');
const db = require('./eventsModel');

router.get('/', (req, res) => {
    db.getAllEvents()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ message: 'error retrieving data', error: err });
        })
})


module.exports = router;