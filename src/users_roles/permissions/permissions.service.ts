import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import dataSource from 'database/config/ormconfig';
import { Permission } from './entities/permission.entity';
import { PersistedEntityNotFoundError } from 'typeorm';

@Injectable()
export class PermissionsService {
  async create(createPermissionDto: CreatePermissionDto) {
    const newPermission = await dataSource
      .createQueryBuilder()
      .insert()
      .into(Permission)
      .values(createPermissionDto)
      .execute()
    if(newPermission) return [
      {
        error: false,
        message: "Permiso creado exitosamente",
        data: [ newPermission ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se creo el permiso",
        data: []
      }
    ]
  }

  async findAll() {
    const permissions = await dataSource
      .getRepository(Permission)
      .createQueryBuilder("permission")
      .getMany()
    if(permissions) return [
      {
        error: false,
        message: "Permisos encontrados",
        data: permissions
      }
    ]
    else return [
      {
        error: true,
        message: "No se puede obtener los permisos",
        data: []
      }
    ]
  }

  async findOne(id: number) {
    const permission = await dataSource
      .getRepository(Permission)
      .createQueryBuilder("permission")
      .where("permission.id = :id", { id })
      .getOne()
    if(permission) return [
      {
        error: false,
        message: "Permiso encontrado",
        data: [ permission ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo encontrar el permiso",
        data: []
      }
    ]
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto) {
    const updatePermission = await dataSource
      .createQueryBuilder()
      .update(Permission)
      .set(updatePermissionDto)
      .where("id = :id", { id })
      .execute()
    if(updatePermission) return [
      {
        error: false,
        message: "Permiso actualizado exitosamente",
        data: [ updatePermission ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo actualizar el permiso",
        data: []
      }
    ]
  }

  async remove(id: number) {
    const deletePermission = await dataSource
      .createQueryBuilder()
      .delete()
      .from(Permission)
      .where("id = :id", { id })
      .execute()
    if(deletePermission) return [
      {
        error: false,
        message: "Permiso elimnado exitosamente",
        data: [ deletePermission ]
      }
    ]
    else return [
      {
        error: true,
        message: "No se pudo eliminar el permiso",
        data: []
      }
    ]
  }
}
