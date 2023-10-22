import { Injectable } from '@nestjs/common';
import { UserService } from '../../src/users_roles/users/users.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users_roles/users/entities/user.entity';
import { UpdateUserDto } from 'src/users_roles/users/dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}
  async signIn(createAuthDto: CreateAuthDto) {
    const user = await this.validate(createAuthDto)
    if(!user)
      return [{
        error: true,
        message: "Usuario no autenticado",
        data: []
      }]

    if(!await this.userService.activeUser(user.id))
      return [{
        error: true,
        message: "Usuario deshabilitado",
        data: []
      }]

    const payload = {
      id: user.id,
      roles: user.role,
      expiresIn: 60
    }
    const jwtToken = this.jwtService.sign(payload)
    const authenticatedUser = {...user, jwtToken}
    const updateUser: UpdateUserDto = await this.userService.findOne(user.id)
    updateUser.token = jwtToken
    this.userService.update(user.id, {...updateUser})
    return [
      {
        error: false,
        message: "Usuario autenticado exitosamente",
        data: authenticatedUser
      }
    ]
  }
  async validate(createAuthDto: CreateAuthDto) {
    const isUser = await this.userService.findUser(createAuthDto.username, createAuthDto.password)
    return isUser ?? null
  }
}
