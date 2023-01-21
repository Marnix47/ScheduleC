const http = require('http');
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.headers['content-type'] === 'application/xml') {
    res.setHeader('Content-Type', 'application/xml');
    res.end('<?xml version="1.0"?>\n<response>Good morning</response>');
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
