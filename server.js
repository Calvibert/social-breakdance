const express = require('express')
const app = express()
const port = 3001


app.get('/', (req, res) => {
    res.setHeader('Content-Type', "application/json");
    res.send(JSON.stringify({ a: 1 }));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))