import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import dataSource from 'database/config/ormconfig';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  async create(createRoleDto: CreateRoleDto) {
    const newRole = await dataSource
      .createQueryBuilder()
      .insert()
      .into(Role)
      .values(createRoleDto)
      .execute()
    if(newRole) return [
      {
        error: false,
        message: "Rol creado exitosamente",
        data: [ newRole ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se creo el rol",
        data: []
      }
    ]
  }

  async findAll() {
    const roles = await dataSource
      .getRepository(Role)
      .createQueryBuilder("role")
      .getMany()
    if(roles) return [
      {
        error: false,
        message: "Roles encontrados",
        data: roles
      }
    ]
    else return [
      {
        error: true,
        message: "No se puede obtener los roles",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const role = await dataSource
      .getRepository(Role)
      .createQueryBuilder("role")
      .where("role.id = :id", { id })
      .getOne()
    if(role) return [
      {
        error: false,
        message: "Rol encontrado",
        data: [ role ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se puede encontrar el rol",
        data: []
      }
    ]
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const updateRole = await dataSource
      .createQueryBuilder()
      .update(Role)
      .set(updateRoleDto)
      .where("id = :id", { id })
      .execute()
    if(updateRole) return [
      {
        error: false,
        message: "Rol actualizado exitosamente",
        data: [ updateRole ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar el rol",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deleteRole = await dataSource
      .createQueryBuilder()
      .delete()
      .from(Role)
      .where("id = :id", { id })
      .execute()
    if(deleteRole) return [
      {
        error: false,
        message: "Rol eliminado exitosamente",
        data: [ deleteRole ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se puedo eliminar el rol",
        data: []
      }
    ]
  }
}
