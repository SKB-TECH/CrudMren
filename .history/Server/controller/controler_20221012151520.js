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
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "some error occured while creating a create operation"
            })
        })
}

//visualisation de tous des utilisateurs
exports.find = (req, res) => {
    userModel.find()
        .then(user => {
            res.send(user)
        })
        .catch(error => {
            res.status(500).send({ message: error.message || "some porbleme" })
        })
}

// mettre a jour des donnees 
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(500)
            .send({ message: "Data update can not empty" })
    }
    const id = req.params.id;
    userModel.findByIdAndUpdate(id.req.body,{useFindAndUpdate:false})
    .then(data=>{
        if(!data){
            res.status(500).send({ message: error.message ||` not data to update` })
        }
    })
    .catch(error=>{

    })
}

// Suppression des donnees 

exports.delete = (req, res) => {

}