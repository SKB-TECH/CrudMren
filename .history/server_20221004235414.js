const express = require('express');
const app = express()

const PORT=process.env.PORT
app.get('/', (req, res) => {
    res.send("Succefuly server")
})

app.listen(3000, () => {
    console.log(`Pret au port  http://localhost:${3000}`);
})