import { Controller, Post, Body, Headers, HttpCode } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  @Post()
  @HttpCode(200) // Respond with a 200 status code
  handleWebhook(
    @Body() body: any, // The payload of the webhook
    @Headers() headers: any, // Headers sent with the webhook
  ): void {
    console.log('Received webhook:', body);
    console.log('Headers:', headers);

    // Process the webhook data here...
  }
}
