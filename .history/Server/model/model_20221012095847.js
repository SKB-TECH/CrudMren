const mongoose = require('mongoose');

const useSchema=mongoose.Schema({
    name:{
        type:String,
        max:55
    }
})