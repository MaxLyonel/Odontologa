import { Injectable } from '@nestjs/common';
import { CreateEmployeeTypeDto } from './dto/create-employee_type.dto';
import { UpdateEmployeeTypeDto } from './dto/update-employee_type.dto';
import { DataSource } from 'typeorm';
import { EmployeeType } from './entities/employee_type.entity';

@Injectable()
export class EmployeeTypeService {
  constructor(private dataSource: DataSource) {}
  async create(createEmployeeTypeDto: CreateEmployeeTypeDto) {
    const newEmployeeType = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(EmployeeType)
      .values(createEmployeeTypeDto)
      .execute()
    if(newEmployeeType) return [
      {
        error: false,
        message: "Nuevo tipo de empleado creado exitosamente",
        data: newEmployeeType
      }
    ]
    else return [
      {
        error: true,
        message: "No se creo el nuevo tipo de empleado",
        data: []
      }
    ]
  }

  async findAll() {
    const employeeTypes = await this.dataSource
      .getRepository(EmployeeType)
      .createQueryBuilder("employeeType")
      .getMany()
    if(employeeTypes) return [
      {
        error: false,
        message: "Tipos de empleados encontrados",
        data: employeeTypes
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo obtener los tipos de empleados",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const employeeType = await this.dataSource
      .getRepository(EmployeeType)
      .createQueryBuilder("employeeType")
      .where("employeeType.id = :id", { id })
      .getOne()
    if(employeeType) return [
      {
        error: false,
        message: "Tipo de empleado encontrado",
        data: [ employeeType ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo obtener al tipo de empleado",
        data: []
      }
    ]
  }

  async update(id: number, updateEmployeeTypeDto: UpdateEmployeeTypeDto) {
    const updateEmployeeType = await this.dataSource
      .createQueryBuilder()
      .update(EmployeeType)
      .set(updateEmployeeTypeDto)
      .where("id = :id ", { id })
      .execute()

    if(updateEmployeeType) return [
      {
        error: false,
        message: "Tipo de empleado actualizado exitosamente",
        data: [ updateEmployeeType ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar el tipo de empleado",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deleteEmployeeType = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(EmployeeType)
      .where("id = :id", { id })
      .execute()
    if(deleteEmployeeType) return [
      {
        error: false,
        message: "Tipo de empleado eliminado exitosamente",
        data: [ deleteEmployeeType ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo eliminar el tipo de empleado",
        data: []
      }
    ]
  }
}
