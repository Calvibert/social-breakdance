const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Routing at Time: ' + Date.now());
    next();
});

router.get('/', (req, res) => {
    res.send('Home page');
});

router.get('/about', (req, res) => {
    res.send('About page');
});

module.exports = router;