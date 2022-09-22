const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const fsRes = fs.readFileSync(path.resolve(__dirname, './index.html'));
  res.end(fsRes);
})

server.listen(3000);
