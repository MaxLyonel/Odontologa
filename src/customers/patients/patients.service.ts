import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { DataSource } from 'typeorm';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  constructor(private dataSource: DataSource) {}
  async create(createPatientDto: CreatePatientDto) {
    const newPatient = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Patient)
      .values(createPatientDto)
      .execute()
    if(newPatient) return [
      {
        error: false,
        message: "Paciente creado exitosamente",
        data: newPatient
      }
    ]
    else return [
      {
        error: true,
        message: "No se creo al paciente",
        data: []
      }
    ]
  }

  async findAll() {
    const patients = await this.dataSource
      .getRepository(Patient)
      .createQueryBuilder("patient")
      .leftJoinAndSelect("patient.person", "person")
      .getMany()
    if(patients) return [
      {
        error: false,
        message: "Pacientes encontrados",
        data: patients
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo obtener a los pacientes",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const patient = await this.dataSource
      .getRepository(Patient)
      .createQueryBuilder("patient")
      .leftJoinAndSelect("patient.person", "person")
      .where("patient.id = :id", { id })
      .getOne()
    if(patient) return [
      {
        error: false,
        message: "Paiente encontrado",
        data: [ patient ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo obtener al paciente",
        data: []
      }
    ]
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    const updatePatient = await this.dataSource
      .createQueryBuilder()
      .update()
      .set(updatePatientDto)
      .where("id = :id", { id })
      .execute()
    if(updatePatient) return [
      {
        error: false,
        message: "Paciente eliminado exitosamente",
        data: [ updatePatient ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar al paciente",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deletePatient = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(Patient)
      .where("id = :id", { id })
      .execute()
    if(deletePatient) return [
      {
        error: false,
        message: "Paciente eliminado exitosamente",
        data: [ deletePatient ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo eliminar al paciente",
        data: []
      }
    ]
  }
}
