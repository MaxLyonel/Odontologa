import { Injectable } from '@nestjs/common';
import { CreateScheludeDto } from './dto/create-schelude.dto';
import { UpdateScheludeDto } from './dto/update-schelude.dto';
import { DataSource } from 'typeorm';
import { Schelude } from './entities/schelude.entity';

@Injectable()
export class ScheludesService {
  constructor(private dataSource: DataSource) {}
  async create(createScheludeDto: CreateScheludeDto) {
    const newSchelude = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Schelude)
      .values(createScheludeDto)
      .execute()
    if(newSchelude) return [
      {
        error: false,
        message: "Agenda creada exitosamente",
        data: [ newSchelude ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo agendar",
        data: []
      }
    ]
  }

  async findAll() {
    const scheludes = await this.dataSource
      .getRepository(Schelude)
      .createQueryBuilder("schelude")
      .getMany()
    if(scheludes) return [
      {
        error: false,
        message: "Agenda encontradas",
        data: scheludes
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo encontrar agendas",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const schelude = await this.dataSource
      .getRepository(Schelude)
      .createQueryBuilder("schelude")
      .where("schelude.id = :id", { id })
      .getOne()
    if(schelude) return [
      {
        error: false,
        message: "Agenda encontrada",
        data: [ schelude ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se encontro agenda",
        data: []
      }
    ]
  }

  async update(id: number, updateScheludeDto: UpdateScheludeDto) {
    const updateSchelude = await this.dataSource
      .createQueryBuilder()
      .update(Schelude)
      .set(updateScheludeDto)
      .execute()
    if(updateSchelude) return [
      {
        error: false,
        message: "Se actualizo al agenda exitosamente",
        data: [ updateSchelude ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar la agenda",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deleteSchelude = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(Schelude)
      .where("id = :id", { id })
      .execute()
    if(deleteSchelude) return [
      {
        error: false,
        message: "Agenda eliminada exitosamente",
        data: [ deleteSchelude ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se puede eliminar la agenda",
        data: []
      }
    ]
  }
}
