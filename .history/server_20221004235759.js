const express = require('express');
const app = express()
const dotenv=require('dotenv')

dotenv.config(path)
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send("Succefuly server")
})

app.listen(PORT, () => {
    console.log(`Pret au port  http://localhost:${PORT}`);
})