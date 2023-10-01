import { Module } from '@nestjs/common';
import { EmployeeTypesService } from './employee_types.service';
import { EmployeeTypesController } from './employee_types.controller';

@Module({
  controllers: [EmployeeTypesController],
  providers: [EmployeeTypesService],
})
export class EmployeeTypesModule {}
