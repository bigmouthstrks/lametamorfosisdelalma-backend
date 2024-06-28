const { createServer } = require('vercel-node-server');
const { join } = require('path');
const express = require('express');

const appPath = join(__dirname, 'dist/main');
const appModule = require(appPath);
const server = express();

async function bootstrap() {
  await appModule.createNestExpressApp(server);
}

bootstrap();

module.exports = createServer(server);