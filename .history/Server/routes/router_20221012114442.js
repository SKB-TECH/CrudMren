const express = require('express');
const route = express.Router();
const services = require('../services/render')
const controller = require('../controller/controler')
/**
    la route principal accueil
*/
route.get('/', services.homeRoutes)
route.get('/add_user', services.add_user)
route.get('/update_user', services.update_user)


// Chemins dAPI
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.delete('/api/users', controller.delete);
route.put('/api/users', controller.update);


module.exports = route
