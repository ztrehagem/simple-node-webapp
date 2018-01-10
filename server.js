const http = require('http');
const fs = require('fs');
const path = require('path');

function serveFile(resp, filePath) {
  fs.readFile('./public' + filePath, (err, file) => {
    if (err) {
      resp.writeHead(404);
      resp.end();
    } else {
      resp.writeHead(200);
      resp.end(file);
    }
  });
}

http.createServer((req, resp) => {
  console.log('req:', req.url);

  switch (req.url) {
    case '/':
      serveFile(resp, '/index.html');
      break;

    case '/api':
      resp.writeHead(200);
      resp.end('hello');
      break;

    default:
      serveFile(resp, req.url);
  }
}).listen(8080);
