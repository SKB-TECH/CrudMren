const express = require('express');
const route = express.Router();
const services = require('../services/render')

/**
    la route principal accueil
*/
route.get('/', services.homeRoutes)
route.get('/add-user',services.add-user)
route.get( (req, res, next) => {
    res.render('add-user')
    next()
})

route.get('/update-user', (req, res, next) => {
    res.render('update-user')
    next()
})

module.exports = route
