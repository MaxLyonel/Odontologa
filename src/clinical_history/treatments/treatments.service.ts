import { Injectable } from '@nestjs/common';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';
import { DataSource } from 'typeorm';
import { Treatment } from './entities/treatment.entity';

@Injectable()
export class TreatmentsService {
  constructor(private dataSource: DataSource) {}
  async create(createTreatmentDto: CreateTreatmentDto) {
    const newTreatment = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Treatment)
      .values(createTreatmentDto)
      .execute()
    if(newTreatment) return [
      {
        error: false,
        message: "Tratamiento creado exitosamente",
        data: newTreatment
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo crear el tratamiento",
        data: []
      }
    ]
  }

  async findAll() {
    const treatments = await this.dataSource
      .getRepository(Treatment)
      .createQueryBuilder("treatment")
      .getMany()
    if(treatments) return [
      {
        error: false,
        message: "Tratamientos encontrados",
        data: treatments
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo encontrar los tratamientos",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const treatment = await this.dataSource
      .getRepository(Treatment)
      .createQueryBuilder("treatment")
      .where("treatment.id = :id", { id })
      .getOne()
    if(treatment) return [
      {
        error: false,
        message: "Tratamiento encontrado",
        data: [ treatment ]
      }
    ]
    else return [
      {
        error: true,
        message: "Tratamiento no encontrado",
        data: []
      }
    ]
  }

  async update(id: number, updateTreatmentDto: UpdateTreatmentDto) {
    const updateTreatment = await this.dataSource
      .createQueryBuilder()
      .update(Treatment)
      .set(updateTreatmentDto)
      .where("id = :id", { id })
      .execute()
    if(updateTreatment) return [
      {
        error: false,
        message: "Tratamiento actualizado exitosamente",
        data: [ updateTreatment ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar el tratamiento",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deleteTreatment = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(Treatment)
      .where("id = :id", { id })
      .execute()
    if(deleteTreatment) return [
      {
        error: false,
        message: "Tratamiento eliminado exitosamente",
        data: [ deleteTreatment ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo eliminar el tratamiento",
        data: []
      }
    ]
  }
}
