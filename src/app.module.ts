import { Module } from '@nestjs/common';
import { WebhookController } from './app.controller';

@Module({
  imports: [WebhookController],
})
export class AppModule {}
