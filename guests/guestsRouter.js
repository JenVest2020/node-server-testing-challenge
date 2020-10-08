const router = require('express').Router();
const db = require('./guestsModel');

router.get('/', (req, res) => {
    db.getAllGuests()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ message: 'error retrieving data', error: err });
        })
})


module.exports = router;