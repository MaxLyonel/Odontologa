import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import dataBaseConfig from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  // El metodo forRoot registra el proveedor ConfigService, que proporciona un metodo get()
  // para leer las variables de configuracion
  imports: [ConfigModule.forRoot({
      isGlobal: true,
      load: [ dataBaseConfig ]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [],
        synchronize: true,
      }),
    })
  ], // con esto cargamos las variables de entorno
  controllers: [AppController],
  providers: [AppService], // los proveedores que seran instanciados por el inyector de Nest y que pueden compartirse al menos en este modulo
})
export class AppModule {
  constructor(private configService: ConfigService){}
}
