import { Injectable } from '@nestjs/common';
import { CreateStageTypeDto } from './dto/create-stage_type.dto';
import { UpdateStageTypeDto } from './dto/update-stage_type.dto';
import { DataSource } from 'typeorm';
import { StageType } from './entities/stage_type.entity';

@Injectable()
export class StageTypesService {
  constructor(private dataSource: DataSource) {}
  async create(createStageTypeDto: CreateStageTypeDto) {
    const newStageType = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(StageType)
      .values(createStageTypeDto)
      .execute()
    if(newStageType) return [
      {
        error: false,
        message: "Tipo de escenario creado exitosamente",
        data: [ newStageType ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo crear el tipo de escenario",
        data: []
      }
    ]
  }

  async findAll() {
    const stageTypes = await this.dataSource
      .getRepository(StageType)
      .createQueryBuilder("stageType")
      .getMany()
    if(stageTypes) return [
      {
        error: false,
        message: "Tipos de escenarios encontrados",
        data: stageTypes
      }
    ]
    else return [
      {
        error: true,
        message: "No se encontro tipos de escenarios",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const stageType = await this.dataSource
      .getRepository(StageType)
      .createQueryBuilder("stageType")
      .where("stageType.id = :id", { id })
      .getOne()
    if(stageType) return [
      {
        error: false,
        message: "Tipo de escenario encontrado",
        data: [ stageType ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se encontro el tipo de escenario",
        data: []
      }
    ]
  }

  async update(id: number, updateStageTypeDto: UpdateStageTypeDto) {
    const updateStageType = await this.dataSource
      .createQueryBuilder()
      .update(StageType)
      .set(updateStageTypeDto)
      .where("id = :id", { id })
      .execute()
    if(updateStageType) return [
      {
        error: false,
        message: "Tipo de escenario actualizado exitosamente",
        data: [ updateStageType ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar el tipo de escenario",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deleteStageType = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(StageType)
      .where("id = :id", { id })
      .execute()
    if(deleteStageType) return [
      {
        error: false,
        message: "Se elimino el tipo de escenario exitosamente",
        data: [ deleteStageType ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo eliminar el tipo de escenario",
        data: []
      }
    ]
  }
}
