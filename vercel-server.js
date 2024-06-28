import { createServer } from 'vercel-node-server';
import { join } from 'path';
const appPath = join(__dirname, 'dist/main');
const app = require(appPath);

module.exports = createServer(app);