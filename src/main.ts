import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let hola;
  let hola2;
  await app.listen(3001);
}
bootstrap();
