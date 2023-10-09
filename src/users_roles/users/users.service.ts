import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import dataSource from '../../../database/config/ormconfig';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const newUser = await dataSource
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(createUserDto)
      .execute()
    if(newUser) return [
      {
        error: false,
        message: "Usuario creado exitosamente",
        data:  [ newUser ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se creo al usuario",
        data: []
      }
    ]
  }

  async findAll() {
    const users = await dataSource
      .getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.person", "person")
      .getMany()
    if(users) return [
      {
        error: false,
        message: "Usuarios encontrados",
        data: users
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo obtener a los usuarios",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const user = await dataSource
      .getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.person", "person")
      .where("user.id = :id", { id })
      .getOne()
    if(user) return [
      {
        error: false,
        message: "Usuario encontrado",
        data: [ user ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo obtener al usuario",
        data: []
      }
    ]
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = await dataSource
      .createQueryBuilder()
      .update(User)
      .set(updateUserDto)
      .where("id = :id", { id })
      .execute()
    if(updateUser) return [
      {
        error: false,
        message: "Usuario actualizado exitosamente",
        data: [ updateUser ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar al usuario",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deleteUser = await dataSource
      .createQueryBuilder()
      .delete()
      .from(User)
      .where("id = :id", { id })
      .execute()
    if(deleteUser) return [
      {
        error: false,
        message: "Usuario eliminado exitosamente!",
        data: [ deleteUser ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo eliminar al usuario",
        data: []
      }
    ]
  }
}
