const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: "Meu servidor Express",
        version: "1.0.0"
    });
});

module.exports = router;
