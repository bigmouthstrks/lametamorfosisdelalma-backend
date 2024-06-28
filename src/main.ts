import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';

const express = require('express');

export async function createNestExpressApp() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  await app.init();
  return server;
}

async function bootstrap() {
  const server = await createNestExpressApp();
  await server.listen(3000);
}
bootstrap();
