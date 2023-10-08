import { Module } from '@nestjs/common';
import { EmployeeTypeService } from './employee_types.service';
import { EmployeeTypeController } from './employee_types.controller';

@Module({
  controllers: [EmployeeTypeController],
  providers: [EmployeeTypeService],
})
export class EmployeeTypeModule {}
