import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Configuracion del modulo
import { ConfigModule, ConfigService } from '@nestjs/config';

// configuracion de la base de datos
import { TypeOrmModule } from '@nestjs/typeorm';
import dataBaseConfig from './config/database.config';

// Modulos importados
import { UsersModule } from './entities/users/users.module';
import { PersonsModule } from './entities/persons/persons.module';
import { PatientsModule } from './entities/patients/patients.module';
import { EmployeesModule } from './entities/employees/employees.module';
import { EmployeeTypesModule } from './entities/employee_types/employee_types.module';
import { TreatmentStatesModule } from './entities/treatment_states/treatment_states.module';
import { TreatmentTypesModule } from './entities/treatment_types/treatment_types.module';
import { StageTypesModule } from './entities/stage_types/stage_types.module';
import { ScheludeStatesModule } from './entities/schelude_states/schelude_states.module';
import { ScheludesModule } from './entities/scheludes/scheludes.module';
import { TreatmentsModule } from './entities/treatments/treatments.module';
import { MedicalHistoriesModule } from './entities/medical_histories/medical_histories.module';
import { RolesModule } from './entities/roles/roles.module';
import { PermissionsModule } from './entities/permissions/permissions.module';
import { UsersRolesModule } from './entities/users_roles/users_roles.module';
import { RolesPermissionsModule } from './entities/roles_permissions/roles_permissions.module';
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
    UsersModule,
    PersonsModule,
    PatientsModule,
    EmployeesModule,
    EmployeeTypesModule,
    TreatmentStatesModule,
    TreatmentTypesModule,
    StageTypesModule,
    ScheludeStatesModule,
    ScheludesModule,
    TreatmentsModule,
    MedicalHistoriesModule,
    RolesModule,
    PermissionsModule,
    UsersRolesModule,
    RolesPermissionsModule
  ], // con esto cargamos las variables de entorno
  controllers: [ AppController ],
  providers: [ AppService ], // los proveedores que seran instanciados por el inyector de Nest y que pueden compartirse al menos en este modulo
})
export class AppModule {
  constructor(private configService: ConfigService){}
}
