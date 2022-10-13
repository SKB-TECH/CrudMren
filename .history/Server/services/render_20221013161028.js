const axios = require('axios');
//le module pour prendre les donnees depuis un API distant



exports.homeRoutes = (req, res) => {
    //on veut execute la requette GET
    axios.get('http://localhost:3000/api/users')
        .then((response) => {
            console.log(response);
            res.render('index', { users: response.data });
        })
        .catch(error => {
            if (error) {
                res.send(error)
            }
        })

}
exports.add_user = (req, res) => {
    res.render('add_user')
}
exports.update_user = (req, res) => {
    axios.get
    res.render('update_user')
}