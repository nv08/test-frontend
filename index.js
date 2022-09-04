const axios = require('axios');
const express = require('express')

const app = express()

const GOOGLE_CLIENT_ID = "834584514103-b22ev5ge0qj7qb9bts30gkco60qt2cop.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

app.get('/', async (req, res) => {
    let image = await axios('https://source.unsplash.com/random');
    res.send(`<img src="${image.request.res.responseUrl}" />`)
})


app.listen((3000), () => {
    console.log("listening on port 3000 with pipeline!")
})