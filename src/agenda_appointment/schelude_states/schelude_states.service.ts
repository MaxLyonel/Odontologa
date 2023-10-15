import { Injectable } from '@nestjs/common';
import { CreateScheludeStateDto } from './dto/create-schelude_state.dto';
import { UpdateScheludeStateDto } from './dto/update-schelude_state.dto';
import { DataSource } from 'typeorm';
import { ScheludeState } from './entities/schelude_state.entity';

@Injectable()
export class ScheludeStatesService {
  constructor(private dataSource: DataSource) {}
  async create(createScheludeStateDto: CreateScheludeStateDto) {
    const newScheludeState = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(ScheludeState)
      .values(createScheludeStateDto)
      .execute()
    if(newScheludeState) return [
      {
        error: false,
        message: "Estado de agenda creado exitosamente",
        data: [ newScheludeState ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo crear el estado de agenda",
        data: []
      }
    ]
  }

  async findAll() {
    const scheludeStates = await this.dataSource
      .getRepository(ScheludeState)
      .createQueryBuilder("scheludeState")
      .getMany()
    if(scheludeStates) return [
      {
        error: false,
        message: "Estados de la agenda encontrados",
        data: scheludeStates
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo encontrar estados de agenda",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const scheludeState = await this.dataSource
      .getRepository(ScheludeState)
      .createQueryBuilder("scheludeState")
      .where("scheludeState.id = :id", { id })
      .getOne()
    if(scheludeState) return [
      {
        error: false,
        message: "Estado de la agenda encontrado",
        data: [ scheludeState ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo encontrar el estado de la agenda",
        data: []
      }
    ]
  }


  async update(id: number, updateScheludeStateDto: UpdateScheludeStateDto) {
    const updateScheludeState = await this.dataSource
      .createQueryBuilder()
      .update(ScheludeState)
      .set(updateScheludeStateDto)
      .where("id = :id", { id })
      .execute()
    if(updateScheludeState) return [
      {
        error: false,
        message: "Estado de la agenda actualizado exitosamente",
        data: [ updateScheludeState ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar el estado de la aganda",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deleteScheludeState = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(ScheludeState)
      .where("id = :id", { id })
      .execute()
    if(deleteScheludeState) return [
      {
        error: false,
        message: "Estado de la agenda eliminado exitosamente",
        data: [ deleteScheludeState ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo eliminar el estado de la agenda",
        data: []
      }
    ]
  }
}
