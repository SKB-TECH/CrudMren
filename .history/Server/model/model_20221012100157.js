const mongoose = require('mongoose');

const useSchema=mongoose.Schema({
    name:{
        type:String,
        max:[55,'le nom doit avoir au maximum 55 caracteres'],
        min:[5,'le nom doit avoir au moin 5 caracteres'],
        required:tr
    },

    email:{
        type:String,

    }
})