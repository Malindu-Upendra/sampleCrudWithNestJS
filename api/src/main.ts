import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ bodyParser: true });
  app.setGlobalPrefix('test');
  app.enableCors()
  await app.init();
  await app.listen(5000);
}
bootstrap();
