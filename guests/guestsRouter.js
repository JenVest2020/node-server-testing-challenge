const router = require('express').Router();
const db = require('./guestsModel');

router.get('/', (req, res) => {
    db.getAllGuests()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ message: 'error retrieving data', error: err });
        });
});

router.post('/', (req, res) => {
    const info = req.body;
    db.addGuest(info)
        .then(info => {
            res.status(201).json(info);
        })
        .catch(err => {
            res.status(500).json({ message: 'error adding new guest to database', error: err });
        });
});


module.exports = router;