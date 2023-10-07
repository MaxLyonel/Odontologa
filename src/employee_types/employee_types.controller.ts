import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeTypesService } from './employee_types.service';
import { CreateEmployeeTypeDto } from './dto/create-employee_type.dto';
import { UpdateEmployeeTypeDto } from './dto/update-employee_type.dto';

@Controller('employee-types')
export class EmployeeTypesController {
  constructor(private readonly employeeTypesService: EmployeeTypesService) {}

  @Post()
  create(@Body() createEmployeeTypeDto: CreateEmployeeTypeDto) {
    return this.employeeTypesService.create(createEmployeeTypeDto);
  }

  @Get()
  findAll() {
    return this.employeeTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeTypeDto: UpdateEmployeeTypeDto) {
    return this.employeeTypesService.update(+id, updateEmployeeTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeTypesService.remove(+id);
  }
}
