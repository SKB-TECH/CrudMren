const express = require('express');
const dotenv=require('dotenv')
const morgan = require('morgan');

const app = express()
dotenv.config({path:"./config.env"})
const PORT = process.env.PORT || 8080

//les infos des requetes

app.get('/', (req, res) => {
    res.send("Succefuly server")
})

app.listen(PORT, () => {
    console.log(`Pret au port  http://localhost:${PORT}`);
})