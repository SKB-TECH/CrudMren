const userModel = require('../model/model')

//enregistrement d'un nouveau user
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'La requete doit contenir des donnees' });
        return;
    }

    //new 
}

//visualisation de tous des utilisateurs
exports.find = (req, res) => {

}

// mettre a jour des donnees 
exports.update = (req, res) => {

}

// Suppression des donnees 

exports.delete = (req, res) => {

}