const axios = require('axios');
//le module pour prendre les donnees depuis un API distant



exports.homeRoutes = (req, res) => {
    //on veut execute la requette GET
    axios.get('http://localhost:3000/api/user')
    .th
    res.render('index');
}
exports.add_user = (req, res) => {
    res.render('add_user')
}
exports.update_user = (req, res) => {
    res.render('update_user')
}