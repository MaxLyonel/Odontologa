import { Injectable } from '@nestjs/common';
import { CreateTreatmentStateDto } from './dto/create-treatment_state.dto';
import { UpdateTreatmentStateDto } from './dto/update-treatment_state.dto';
import { DataSource } from 'typeorm';
import { TreatmentState } from './entities/treatment_state.entity';

@Injectable()
export class TreatmentStatesService {
  constructor(private dataSource: DataSource) {}
  async create(createTreatmentStateDto: CreateTreatmentStateDto) {
    const newTreatmentState = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(TreatmentState)
      .values(createTreatmentStateDto)
      .execute()
    if(newTreatmentState) return [
      {
        error: false,
        message: "Estado del tratamiento creado exitosamente",
        data: [ newTreatmentState ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo crear el estado del tratamiento",
        data: []
      }
    ]
  }

  async findAll() {
    const treatmentStates = await this.dataSource
      .getRepository(TreatmentState)
      .createQueryBuilder("treatmentState")
      .getMany()
    if(treatmentStates) return [
      {
        error: false,
        message: "Estados de tratamientos encontrados",
        data: [ treatmentStates ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo encontrar estados de tramites",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const treatmentState = await this.dataSource
      .getRepository(TreatmentState)
      .createQueryBuilder("treatmentState")
      .where("treatmentState.id = :id", { id })
      .getOne()
    if(treatmentState) return [
      {
        error: false,
        message: "Estado de tratamiento encontrado",
        data: [ treatmentState ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo encontrar el estado del tratamiento",
        data: []
      }
    ]
  }

  async update(id: number, updateTreatmentStateDto: UpdateTreatmentStateDto) {
    const updateTreatmentState = await this.dataSource
      .createQueryBuilder()
      .update(TreatmentState)
      .set(updateTreatmentStateDto)
      .where("id = :id", { id })
      .execute()
    if(updateTreatmentState) return [
      {
        error: false,
        message: "Estado de tratamiento actualizado exitosamente",
        data: [ updateTreatmentState ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar el estado del tratamiento",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deleteTreatmentState = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(TreatmentState)
      .where("id = :id", { id })
      .execute()
    if(deleteTreatmentState) return [
      {
        error: false,
        message: "Estado del tratamiento elimindao exitosamente",
        data: [ deleteTreatmentState ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo eliminar el estado del tratamiento",
        data: []
      }
    ]
  }
}
