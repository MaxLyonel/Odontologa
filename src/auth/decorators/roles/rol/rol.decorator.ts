import { SetMetadata } from '@nestjs/common';
import dataSource from 'database/config/ormconfig';
import { RolesService } from 'src/users_roles/roles/roles.service';
// import { Role } from '../../../../../src/users_roles/roles/entities/role.entity'
import { Role } from 'src/users_roles/roles/entities/role.entity';


// const roles = new RolesService(dataSource).findAll()

export const ROLES_KEY = 'roles'
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles)