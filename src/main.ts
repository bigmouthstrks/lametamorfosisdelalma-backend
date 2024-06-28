import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

export async function createNestExpressApp(server: any) {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  await app.init();
}

async function bootstrap() {
  const server = express();
  await createNestExpressApp(server);
  await server.listen(3000);
}
bootstrap();
