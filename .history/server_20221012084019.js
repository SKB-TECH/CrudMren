const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyParse = require('body-parser')
const path = require('path');
const connectDB=require('./Server')



const app = express();

//appele du dossier contenant notre variable d'environnemet PORT
dotenv.config({ path: "./config.env" })
const PORT = process.env.PORT || 8080

//les i(nfos des requetes
app.use(morgan('tiny'))

//convertion des requete en format Json
app.use(bodyParse.urlencoded({ extended: true }));

// determination du moteur de visualisation ejs sur le projet
app.set('view engine', 'ejs')
//le lien contenant les fichies ej
//app.set('view',path.resolve(__dirname,'/views/ejs'))

//disponibiliser les ressources du sites (style css,img,js)
app.use('/css', express.static(path.resolve(__dirname, './assets/css')))
app.use('/img', express.static(path.resolve(__dirname, './assets/img')))
app.use('/js', express.static(path.resolve(__dirname, './assets/js')))

// les routes

app.use(require('./Server/routes/router'))

app.listen(PORT, () => {
    console.log(`Pret au port  http://localhost:${PORT}`);
})