const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Routing at Time: ' + Date.now());
    next();
});

router.get('/', (req, res) => {
    res.render('index', {title: 'Hey', posts: [{name: "Samuel Dufresne", ptitle: "Test post", content: "content1"},
    {name: "Peter Griffin", ptitle: "this is a title", content: "second content"}]});
});

router.get('/about', (req, res) => {
    res.send('About page');
});

module.exports = router;