const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB: ${con.connection.host}`);
    }
    catch (error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectDB;