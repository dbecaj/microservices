const express = require('express');
const server = express();
const PORT = process.env.PORT;

const comm = require('./comm');

server.get('/v1/', (req, res) => {
    res.send('Hello world!');
})

server.get('/v1/user', (req, res) => {
    const options = {
        host: 'localhost',
        port: 3001,
        path: '/',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    comm.get(options, (status, obj) => {
        res.send(obj);
    });
})

server.listen(PORT, () => {
    console.log(`API Gateway listening on port ${PORT}...`);
})