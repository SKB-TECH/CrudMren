const express = require('express');
const app = express()

const PORT=process.env.PORT||8080

app.get('/', (req, res) => {
    res.send("Succefuly server")
})

app.listen(PORT, () => {
    console.log(`Pret au port  http://localhost:${3000}`);
})