require('dotenv').config();
const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/:category', (req, res) => {

    console.log(`In Router GET /search`, req.params.category);
    console.log(process.env.GIPHY_API_KEY, "???")

    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/random',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            tag: req.params.category
        }
    })
    .then(apiRes => {
        console.log('Router GET /search request success!', apiRes.data);
        res.send(apiRes.data);
    })
    .catch(err => {
        console.log('Router GET /search request error', err);
        res.sendStatus(500);
    })
});
module.exports = router;
