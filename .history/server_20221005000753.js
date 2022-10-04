const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyParse = require('body-parser')
const app = express()
dotenv.config({ path: "./config.env" })
const PORT = process.env.PORT || 8080

//les i(nfos des requetes
app.use(morgan('tiny'))

//convertion des requete en format Json
app.use(bodyParse.urlencoded({extended:true}));

//

app.get('/', (req, res) => {
    res.send("Succefuly server")
})

app.listen(PORT, () => {
    console.log(`Pret au port  http://localhost:${PORT}`);
})