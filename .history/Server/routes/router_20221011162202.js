const express = require('express');
const route = express.Router();


route.get('/', (req, res, next) => {
    res.render('index')
    next()
})

route.get('/add-user', (req, res, next) => {
    res.render('add-user')
    next()
})

route.get('/update-user', (req, res, next) => {
    res.render('update-user')
    next()
})

module.exports = route
