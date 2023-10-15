import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { DataSource } from 'typeorm';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonsService {
  constructor(private dataSource: DataSource) {}
  async create(createPersonDto: CreatePersonDto) {
    const newPerson = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Person)
      .values(createPersonDto)
      .execute()

    if(newPerson) return [
      {
        error: false,
        message: "Persona creada exitosamente",
        data:  [ newPerson ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se creo persona",
        data: []
      }
    ]
  }

  async findAll() {
    const persons = await this.dataSource
      .getRepository(Person)
      .createQueryBuilder("person")
      .getMany()
    if(persons) return [
      {
        error: false,
        message: "Personas encontradas",
        data: persons
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo encontrar a las personas",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const person = await this.dataSource
      .getRepository(Person)
      .createQueryBuilder("person")
      .where("person.id = :id", { id })
      .getOne()
    if(person) return [
      {
        error: false,
        message: "Persona encontrada",
        data: [ person ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo obtener a la persona",
        data: []
      }
    ]
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const updatePerson = await this.dataSource
      .createQueryBuilder()
      .update(Person)
      .set(updatePersonDto)
      .where("id = :id", { id })
      .execute()
    if(updatePerson) return [
      {
        error: false,
        message: "Persona actualizada exitosamente",
        data: [ updatePerson ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar a la persona",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deletePerson = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(Person)
      .where("id = :id", { id })
      .execute()
    if(deletePerson) return [
      {
        error: false,
        message: "Persona eliminada exitosamente",
        data: [ deletePerson ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo eliminar a la persona",
        data: []
      }
    ]
  }
}
