const server = require('./server');
const port = 8000;

server.listen(port, (req, res) => {
    console.log(`Express server running on port ${port}`);
});
