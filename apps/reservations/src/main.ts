import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Enables automatic transformation
      whitelist: true, // Strips properties not defined in the DTO
    }),
  );
  app.use(cookieParser());
  app.useLogger(app.get(Logger));
  console.log('Starting reservations service...');
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
