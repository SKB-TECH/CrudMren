const mongoose = require( 'mongoose');

const connectDb=async()=>{
    try {
        const con=mongoose.connect(process.env.URL,{})
    } catch (error) {
        
    }
}