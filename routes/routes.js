const express = require('express');
const router = express.Router();

router.get('/getAll', (req, res) => {
    res.send('Sending all data')
})






module.exports = router;