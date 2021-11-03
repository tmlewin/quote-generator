const router = require('express').Router()

const quotes = require('../quotes.json')

router.get('/random',(req, res) => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).send({quote})
})

router.get('/:id?',(req, res) => {
    if(req.params.id) {
        return  res.status(200).send({"quote":quotes[req.params.id]})

    }
    res.status(200).send(quotes)
})

module.exports = router