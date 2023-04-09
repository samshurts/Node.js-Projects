const http = require('http');

const requestListener = (req, res) => {
  console.dir(req, { depth: 0 });
  console.dir(res, { depth: 0 });
  res.write('Hello World\n');
  res.end();
};

const server = http.createServer();
server.on('request', requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});
