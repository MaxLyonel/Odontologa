import { Module } from '@nestjs/common';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
import { UserController } from './users/users.controller';
import { UserModule } from './users/users.module';
import { UserService } from './users/users.service';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';

@Module({
    imports: [ UserModule, PermissionsModule, RolesModule ],
    controllers: [ UserController, RolesController],
    providers: [ UserService, RolesService ]
})
export class UsersRolesModule {}
