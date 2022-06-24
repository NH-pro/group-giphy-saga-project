require('dotenv').config();
const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/:category/:searchTerm', (req, res) => {

    console.log(`In Router GET /search`, req.params.category, req.params.searchTerm);
    console.log(process.env.GIPHY_API_KEY, "???")

    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            q: `${req.params.category} ${req.params.searchTerm}`
        }
    })
    .then(apiRes => {
        //console.log('Router GET /search request success!', apiRes.data);
        res.send(apiRes.data);
    })
    .catch(err => {
        console.log('Router GET /search request error', err);
        res.sendStatus(500);
    })
});
module.exports = router;
