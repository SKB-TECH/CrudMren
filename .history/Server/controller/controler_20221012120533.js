const userModel = require('../model/model');
const { use } = require('../routes/router');

//enregistrement d'un nouveau user
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'La requete doit contenir des donnees' });
        return;
    }
    //new user
    const userNew = new userModel({
        name: req.body.name,
        email: req.body.email,
        sexe: req.body.sexe,
        statut: req.body.statut
    })
    userNew
    .save(userNew)
    .then(data=>{
        res.send(data)
    })
    .catch(error,{
        res.s
    })
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