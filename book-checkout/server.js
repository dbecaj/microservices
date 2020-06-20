const express = require('express');
const server = express();
const PORT = process.env.PORT;

server.get('/', (req, res) => {
    res.send(`Hello from book-checkout service!`);
});

server.listen(PORT, () => {
    console.log(`Book-Checkout service is running on port ${PORT}...`);
})