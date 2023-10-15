import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService {
  constructor(private dataSource: DataSource) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = await this.dataSource
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
    const users = await this.dataSource
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
    const user = await this.dataSource
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
    const updateUser = await this.dataSource
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
    const deleteUser = await this.dataSource
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

  async findUser(username: string, password: string) {
    const user = await this.dataSource
      .getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.role", "role")
      .where("user.username = :username", {username})
      .where("user.password = :password", {password})
      .getOne()
    console.log(user)
    return user
  }

  async activeUser(id: number) {
    const user = await this.dataSource
      .getRepository(User)
      .createQueryBuilder("user")
      .where("user.id = :id", { id })
      .where("user.active = :active", { active: true})
      .getOne()
    if(user) return true
    else return false
  }
}
