const express = require('express');
const server = express();

// route methods
server.get('/', (req, res) => {
    res.status(200).json({message: "get is working"});
});

server.get('/about', (req, res) => {
    res.send('about');
});

server.get('/random.text', (req, res) => {
    res.send('random.text')
})

// route parameters

server.get('/users/:userID/books/:bookId', (req, res) => {
    res.send(req.params);
});

// multiple route handlers

server.get('/example/b', (req, res, next) => {
    console.log('first handler');
    next();
}, function (req, res) {
    console.log('second handler')
    res.send('second handler')
});

module.exports = server;