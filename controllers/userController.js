const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("path is working");
})
module.exports = router;