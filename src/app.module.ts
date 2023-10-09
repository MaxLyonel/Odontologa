import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Configuracion del modulo
import { ConfigModule, ConfigService } from '@nestjs/config';

// configuracion de la base de datos
import { TypeOrmModule } from '@nestjs/typeorm';
import dataBaseConfig from '../database/config/database.config';

// Modulos importados
import { PersonsModule } from './persons/persons.module';
import { ClinicalHistoryModule } from './clinical_history/clinical_history.module';
import { AgendaAppointmentModule } from './agenda_appointment/agenda_appointment.module';
import { CustomersModule } from './customers/customers.module';
import { UsersRolesModule } from './users_roles/users_roles.module';
import { EmployeesModule } from './employees/employees.module';
import { User } from './users_roles/users/entities/user.entity';
import { Person } from './persons/entities/person.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ dataBaseConfig ]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService ],
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
    }),
    PersonsModule,
    EmployeesModule,
    UsersRolesModule,
    ClinicalHistoryModule,
    AgendaAppointmentModule,
    CustomersModule,
  ], // con esto cargamos las variables de entorno
  controllers: [ AppController ],
  providers: [ AppService ], // los proveedores que seran instanciados por el inyector de Nest y que pueden compartirse al menos en este modulo
})
export class AppModule {
  constructor(private configService: ConfigService){}
}
