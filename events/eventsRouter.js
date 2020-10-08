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

router.post('/add', (req, res) => {
    let event = req.body;
    db.addEvent(event)
        .then(event => {
            res.status(200).json(event);
        })
        .catch(err => {
            res.status(500).json({ message: 'error saving new event', error: err });
        });
})

router.delete('/delete', (req, res) => {
    const { id } = req.params;
    db.removeEvent(id)
        .then(response => {
            res.status(200).json({ message: 'event successfully removed' });
        })
        .catch(err => {
            res.status(500).json({ message: 'error removing event' });
        })
})


module.exports = router;