process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureExpress = require('./config/express');
const app = configureExpress();

const localPort = 3000;

let port = process.env.port || localPort;

app.listen(port);
module.exports = app;

console.log('Server running at http://localhost:3000/');