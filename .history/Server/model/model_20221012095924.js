const mongoose = require('mongoose');

const useSchema=mongoose.Schema({
    name:{
        type:String,
        max:[55,'le nom doit avoir '],
        min:5
    }
})