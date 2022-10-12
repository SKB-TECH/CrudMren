const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.URL, {
            useNewParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
           
        })
        console.log(`MongoDB: ${con.connection.host}`);
    }
    catch (error) {
        console.log(error)
        process.exit
    }
}

module.exports = connectDB;