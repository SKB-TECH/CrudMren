const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send("Succefuly server")
})

app.listen(3000, () => {
    console.log(`Pret au port ${3000`);
})