import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/auth/decorators/roles/rol/rol.decorator';
import { Role } from 'src/users_roles/roles/entities/role.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ])
    if(!requiredRoles) {
      return true
    }
    const { user } = context.switchToHttp().getRequest()
    return user.roles?.some((obj) => requiredRoles.includes(obj.name))
  }
}
