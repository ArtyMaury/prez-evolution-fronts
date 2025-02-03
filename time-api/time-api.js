const http = require('http');

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.url === '/time' && req.method === 'GET') {
    const currentTime = new Date().toLocaleTimeString();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    console.log('currentTime:', currentTime);
    res.end(JSON.stringify({ time: currentTime }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 8888;
server.listen(port, () => {
  console.log(`Time API listening at http://localhost:${port}`);
});