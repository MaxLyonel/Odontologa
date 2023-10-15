import { NestFactory } from '@nestjs/core'; // clase principal
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() { // bootstrap  = arranque
  const app = await NestFactory.create(AppModule); // crea un objeto con metodos
  const logger = new Logger('Bootstrap');
  await app.listen(3000);
  logger.log(`***** Servidor corriendo en ${await app.getUrl()} ******`);
}
bootstrap();
