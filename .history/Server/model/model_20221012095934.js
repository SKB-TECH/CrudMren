const mongoose = require('mongoose');

const useSchema=mongoose.Schema({
    name:{
        type:String,
        max:[55,'le nom doit avoir au maximum 55 caracteres'],
        min:
    }
})