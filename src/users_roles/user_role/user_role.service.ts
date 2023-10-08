import { Injectable } from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user_role.dto';
import { UpdateUserRoleDto } from './dto/update-user_role.dto';

@Injectable()
export class UserRoleService {
  create(createUserRoleDto: CreateUserRoleDto) {
    return 'This action adds a new usersRole';
  }

  findAll() {
    return `This action returns all usersRoles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersRole`;
  }

  update(id: number, updateUserRoleDto: UpdateUserRoleDto) {
    return `This action updates a #${id} usersRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersRole`;
  }
}