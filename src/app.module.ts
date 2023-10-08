import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Configuracion del modulo
import { ConfigModule, ConfigService } from '@nestjs/config';

// configuracion de la base de datos
import { TypeOrmModule } from '@nestjs/typeorm';
import dataBaseConfig from '../database/config/database.config';

// Modulos importados
// import { UsersModule } from './users_roles/users/users.module';
import { PersonsModule } from './persons/persons.module';
// import { PatientsModule } from './customers/patients/patients.module';
// import { EmployeeTypesModule } from './employees/employee_types/employee_types.module';
// import { TreatmentStatesModule } from './clinical_history/treatment_states/treatment_states.module';
// import { TreatmentTypesModule } from './clinical_history/treatment_types/treatment_types.module';
// import { StageTypesModule } from './clinical_history/stage_types/stage_types.module';
// import { ScheludeStatesModule } from './agenda_appointment/schelude_states/schelude_states.module';
// import { ScheludesModule } from './agenda_appointment/scheludes/scheludes.module';
// import { TreatmentsModule } from './clinical_history/treatments/treatments.module';
// import { MedicalHistoriesModule } from './clinical_history/medical_histories/medical_histories.module';
// import { RolesModule } from './users_roles/roles/roles.module';
// import { PermissionsModule } from './users_roles/permissions/permissions.module';
// import { RolesPermissionsModule } from './users_roles/roles_permissions/roles_permissions.module';
import { ClinicalHistoryModule } from './clinical_history/clinical_history.module';
import { AgendaAppointmentModule } from './agenda_appointment/agenda_appointment.module';
import { CustomersModule } from './customers/customers.module';
import { UsersRolesModule } from './users_roles/users_roles.module';
import { EmployeesModule } from './employees/employees.module';
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
    // UsersModule,
    PersonsModule,
    // PatientsModule,
    EmployeesModule,
    // EmployeeTypesModule,
    // TreatmentStatesModule,
    // TreatmentTypesModule,
    // StageTypesModule,
    // ScheludeStatesModule,
    // ScheludesModule,
    // TreatmentsModule,
    // MedicalHistoriesModule,
    // RolesModule,
    // PermissionsModule,
    UsersRolesModule,
    // RolesPermissionsModule,
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
