import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidationPipe } from './validation/validation-pipe/validation-pipe';
import { IsInt } from 'class-validator';
import { DeleteUserDto } from './dto/delete-user.dto';

@Controller('users') // 'users' es un prefijo de ruta /users
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body(new ValidationPipe) createUserDto: CreateUserDto) {
    const newUser = await this.userService.create(createUserDto);
    return newUser ? {
      error: false,
      message: "Usuario creado exitosamente",
      data: [ createUserDto ]
    } : {
      error: true,
      message: "No se pudo crear al usuario",
      data: []
    }
  }

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return users ? {
      error: false,
      message: "Listado de usuarios",
      data: users
    } : {
      error: true,
      message: "No se encontraron usuarios",
      data: []
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.findOne(+id)
    return user ? {
      error: false,
      message: 'Usuario encontrado',
      data: [ user ]
    } : {
      error: true,
      message: 'Usuario no encontrado',
      data: []
    }
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body(new ValidationPipe) updateUserDto: UpdateUserDto) {
    const updateUser = await this.userService.update(+id, updateUserDto);
    return updateUser ? {
      error: false,
      message: "Usuario actualizado exitosamente",
      data: [ updateUserDto ]
    } : {
      error: true,
      message: "No se pudo actualizar al usuario",
      data: []
    }
  }

  @Delete(':id')
  // async remove(@Param('id', new ValidationPipe) @IsInt() id: number) {
  async remove(@Param(new ValidationPipe) params: DeleteUserDto) {
    const userId = params.id
    const deleteUser = await this.userService.remove(userId);
    return deleteUser ?  {
        error: false,
        message: "Usuario eliminado exitosamente!",
        data: [ deleteUser ]
    } : {
        error: true,
        message: "No se pudo eliminar al usuario",
        data: []
    }
  }
}
