import { Injectable } from '@nestjs/common';
import { CreateMedicalHistoryDto } from './dto/create-medical_history.dto';
import { UpdateMedicalHistoryDto } from './dto/update-medical_history.dto';
import { DataSource } from 'typeorm';
import { MedicalHistory } from './entities/medical_history.entity';

@Injectable()
export class MedicalHistoriesService {
  constructor(private dataSource: DataSource) {}
  async create(createMedicalHistoryDto: CreateMedicalHistoryDto) {
    const newMedicalHistory = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(MedicalHistory)
      .values(createMedicalHistoryDto)
      .execute()
    if(newMedicalHistory) return [
      {
        error: false,
        message: "Se creo el historial medico exitosamente",
        data: [newMedicalHistory]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo crear el historial medico",
        data: []
      }
    ]
  }

  async findAll() {
    const medicalHistories = await this.dataSource
      .getRepository(MedicalHistory)
      .createQueryBuilder("medicalHistory")
      .getMany()
    if(medicalHistories) return [
      {
        error: false,
        message: "Historiales medicos encontrados",
        data: [ medicalHistories ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se encontraron historiales medicos",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const medialHistory = await this.dataSource
      .getRepository(MedicalHistory)
      .createQueryBuilder("medicalHistory")
      .where("medicalHistory.id = :id", { id })
      .getOne()
    if(medialHistory) return [
      {
        error: false,
        message: "Historial medico encontrado",
        data: [ medialHistory ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo encontrar el historial medico",
        data: []
      }
    ]
  }

  async update(id: number, updateMedicalHistoryDto: UpdateMedicalHistoryDto) {
    const updateMedicalHistory = await this.dataSource
      .createQueryBuilder()
      .update(MedicalHistory)
      .set(updateMedicalHistoryDto)
      .where("id = :id", { id })
      .execute()
    if(updateMedicalHistory) return [
      {
        error: false,
        message: "Hitorial medico actualizo exitosamente",
        data: [updateMedicalHistory]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar el historial medico",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deleteMedicalHistory = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(MedicalHistory)
      .where("id = :id", { id })
      .execute()
    if(deleteMedicalHistory) return [
      {
        error: false,
        message: "Historial medico elimnado exitosamente",
        data: [ deleteMedicalHistory ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo eliminar el historial medico",
        data: []
      }
    ]
  }
}
