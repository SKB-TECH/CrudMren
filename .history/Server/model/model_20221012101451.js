const mongoose = require('mongoose');

const useSchema=mongoose.Schema({
    name:{
        type:String,
        max:[55,'le nom doit avoir au maximum 55 caracteres'],
        min:[5,'le nom doit avoir au moin 5 caracteres'],
        required:true
    },

    email:{
        type:String,
        required:true,
    },
    sexe:{
        type:String,
        max:[15,'le sexe doit avoir au maximum 15 caracteres'],
        min:[1,'le sexe doit avoir au minimum 1 caractere']
    },

    statut:{
        type:Str
    }
})