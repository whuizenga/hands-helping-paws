const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
    axios.get(`https://api.petfinder.com/shelter.getPets?key=${process.env.PETFINDERKEY}&id=OK252&format=json`).then((response) => {
        res.json(response.data.petfinder.pets);
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;