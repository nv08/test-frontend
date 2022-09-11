const axios = require('axios');
const express = require('express')

const app = express()



app.get('/', async (req, res) => {
    res.send('hello');
})

app.listen((3000), () => {
    console.log("listening on port 3000 with pipeline!");
})
