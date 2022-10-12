const mongoose = require( 'mongoose');

const connectDb=async()=>{
    try {
        const con=mongoose.connect(process.env.URL,{
            useNewParser:true,
            useUnifiedTopology:true,
            useFindAndModify:true,
            useCreateIndex:true  
        })
        console.log(`MongoDB: ${con.c}`)
    } catch (error) {
        
    }
}