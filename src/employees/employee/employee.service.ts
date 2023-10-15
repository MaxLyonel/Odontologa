import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { DataSource } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(private dataSource: DataSource) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const newEmployee = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Employee)
      .values(createEmployeeDto)
      .execute()
    if(newEmployee) return [
      {
        error: false,
        message: "Empleado creado exitosamente",
        data: newEmployee
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo crear al empleado",
        data: []
      }
    ]
  }

  async findAll() {
    const employees = await this.dataSource
      .getRepository(Employee)
      .createQueryBuilder("employee")
      .getMany()
    if(employees) return [
      {
        error: false,
        message: "Empleados encontrados",
        data: employees
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo encontrar a los empleados",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const employee = await this.dataSource
      .getRepository(Employee)
      .createQueryBuilder("employee")
      .where("employee.id = :id", { id })
      .getOne()
    if(employee) return [
      {
        error: false,
        message: "Empleado encontrado",
        data: [ employee ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo obtener al empleado",
        data: []
      }
    ]
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const updateEmployee = await this.dataSource
      .createQueryBuilder()
      .update(Employee)
      .set(updateEmployeeDto)
      .where("id = :id", { id })
      .execute()
    if(updateEmployee) return [
      {
        error: false,
        message: "Empleado actualizado exitosamente",
        data: [ updateEmployee ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar al empleado",
        data: [ updateEmployee ]
      }
    ]
  }

  async remove(id: number) {
    const deleteEmployee = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(Employee)
      .where("id = :id", { id })
      .execute()
    if(deleteEmployee) return [
      {
        error: false,
        message: "Empleado eliminado exitosamente",
        data: [ deleteEmployee ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo eliminar al empleado",
        data: []
      }
    ]
  }
}
