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
    const guest = req.body;
    db.addGuest(guest)
        .then(info => {
            res.status(201).json(info);
        })
        .catch(err => {
            res.status(500).json({ message: 'error adding new guest to database', error: err });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.removeGuest(id)
        .then(e => {
            if (e > 0) {
                res.status(200).json({ message: 'guest successfully deleted' });
            } else {
                res.status(404).json({ message: 'Id not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'error deleting guest from database', error: err });
        });
});


module.exports = router;