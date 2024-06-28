const { createServer } = require('vercel-node-server');
const { join } = require('path');

const appPath = join(__dirname, 'dist/main');
const app = require(appPath);

module.exports = createServer(app);