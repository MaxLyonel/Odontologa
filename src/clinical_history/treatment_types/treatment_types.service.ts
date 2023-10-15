import { Injectable } from '@nestjs/common';
import { CreateTreatmentTypeDto } from './dto/create-treatment_type.dto';
import { UpdateTreatmentTypeDto } from './dto/update-treatment_type.dto';
import { DataSource } from 'typeorm';
import { TreatmentType } from './entities/treatment_type.entity';

@Injectable()
export class TreatmentTypesService {
  constructor(private dataSource: DataSource) {}
  async create(createTreatmentTypeDto: CreateTreatmentTypeDto) {
    const newTreatmentType = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(TreatmentType)
      .values(createTreatmentTypeDto)
      .execute()
    if(newTreatmentType) return [
      {
        error: false,
        message: "Tipo de tratamiento creado exitosamente",
        data: [ newTreatmentType ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo crear el tipo de tratamiento",
        data: []
      }
    ]
  }

  async findAll() {
    const treatmentTypes = await this.dataSource
      .getRepository(TreatmentType)
      .createQueryBuilder("treatmentType")
      .getMany()
    if(treatmentTypes) return [
      {
        error: false,
        message: "Tipos de tratamientos encontrados",
        data: treatmentTypes
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo obtener los tipos de tratamientos",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const treatmentType = await this.dataSource
      .getRepository(TreatmentType)
      .createQueryBuilder("treatmentType")
      .where("treatmentType.id = :id", { id })
      .getOne()
    if(treatmentType) return [
      {
        error: false,
        message: "Tipo de tratamiento encontrado",
        data: [ treatmentType ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se encontro el tipo de tratamiento",
        data: []
      }
    ]
  }

  async update(id: number, updateTreatmentTypeDto: UpdateTreatmentTypeDto) {
    const updateTreatmentType = await this.dataSource
      .createQueryBuilder()
      .update(TreatmentType)
      .set(updateTreatmentTypeDto)
      .where("id = :id", { id })
      .execute()
    if(updateTreatmentType) return [
      {
        error: false,
        message: "Tipo de tratamiento actualiazado exitosamente",
        data: [ updateTreatmentType ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar el tipo de tratamiento",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deleteTreatmentType = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(TreatmentType)
      .where("id = :id", { id })
      .execute()
    if(deleteTreatmentType) return [
      {
        error: false,
        message: "Tipo de tratamiento eliminado exitosamente",
        data: [ deleteTreatmentType ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo eliminar el tipo de tratamiento",
        data: []
      }
    ]
  }
}
