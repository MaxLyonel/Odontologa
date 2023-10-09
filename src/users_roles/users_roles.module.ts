import { Module } from '@nestjs/common';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
import { RolesPermissionsModule } from './roles_permissions/roles_permissions.module';
import { UserRoleModule } from './user_role/user_role.module';
import { UserController } from './users/users.controller';
import { UserModule } from './users/users.module';
import { UserService } from './users/users.service';

@Module({
    imports: [ UserModule, PermissionsModule, RolesModule, RolesPermissionsModule, UserRoleModule ],
    controllers: [ UserController],
    providers: [ UserService ]
})
export class UsersRolesModule {}
