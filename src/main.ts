import { NestFactory } from '@nestjs/core'; // clase principal
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // crea un objeto con metodos
  await app.listen(3000);
}
bootstrap();
