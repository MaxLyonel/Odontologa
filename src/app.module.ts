import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Configuracion del modulo
import { ConfigModule, ConfigService } from '@nestjs/config';

// configuracion de la base de datos
import { TypeOrmModule } from '@nestjs/typeorm';

// Modulos importados
import { PersonsModule } from './persons/persons.module';
import { ClinicalHistoryModule } from './clinical_history/clinical_history.module';
import { AgendaAppointmentModule } from './agenda_appointment/agenda_appointment.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ ConfigService ],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: ['dist/**/*.entity.{js,ts}'],
        synchronize: true,
      }),
    }),
    PersonsModule,
    EmployeesModule,
    ClinicalHistoryModule,
    AgendaAppointmentModule,
    CustomersModule,
    AuthModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {
  // constructor(private dataSource: DataSource, private configService: ConfigService){}
}
