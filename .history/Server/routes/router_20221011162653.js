const express = require('express');
const route = express.Router();
const services = require('../services/render')

/**
    la route principal accueil
*/
route.get('/', services.homeRoutes)
route.get('/add-user',services.add-user)
route.get('/-user',services.add-user)

module.exports = route
