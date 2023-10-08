import { Module } from '@nestjs/common';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
import { RolesPermissionsModule } from './roles_permissions/roles_permissions.module';
import { UserRolesModule } from './user_role/user_role.module';

@Module({
    imports: [ PermissionsModule, RolesModule, RolesPermissionsModule, UserRolesModule ]
})
export class UsersRolesModule {}
