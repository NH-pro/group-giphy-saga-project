require('dotenv').config();
const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(`In Router GET /search`, req.body);
    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            q: req.body
        }
    })
    .then(apiRes => {
        console.log('Router GET /search request success!', apiRes);
        res.send(apiRes.data);
    })
    .catch(err => {
        console.log('Router GET /search request error', err);
        res.sendStatus(500);
    })
});
module.exports = router;
