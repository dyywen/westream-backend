var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const apiKey = process.env.OWM_API_KEY;

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const movies = data.results
        res.json({ movies })
    })
})

router.get('/movies/genre', (req, res) => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const genres = data.genres
        res.json({ genres })
    })
})

module.exports = router;
