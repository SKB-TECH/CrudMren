const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyParse = require('body-parser')
const path=require('path');

const app = express()
dotenv.config({ path: "./config.env" })
const PORT = process.env.PORT || 8080

//les i(nfos des requetes
app.use(morgan('tiny'))

//convertion des requete en format Json
app.use(bodyParse.urlencoded({extended:true}));

// determination du moteur de visualisation ejs sur le projet
app.set('views engine','ejs')

app.get('/', (req, res) => {
    res.send("Succefuly server")
})

app.listen(PORT, () => {
    console.log(`Pret au port  http://localhost:${PORT}`);
})