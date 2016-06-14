var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
    knex.table('player').select().then(players => {
        console.log(players[0].name);
        res.render('players', {
            player: players
        });
    })
});

router.get('/add', (req, res) => {
    res.render('add');
});

router.post('/add', (req, res, next) => {
    knex('player').insert({
        name: req.body.name,
        country: req.body.country,
        age: req.body.age
    }).then(msg => {
        res.redirect('/players')
    }).catch(error => {
        next(error)
    })
})

module.exports = router;
