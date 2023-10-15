import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthGuard } from './guards/auth/auth.guard';
import { Public } from './decorators/auth/auth.decorator';
import { Roles } from './decorators/roles/rol/rol.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  findOne(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signIn(createAuthDto)
  }

  // @Public()
  @Roles('DENTISTA')
  @Get('profile')
  profileUser() {
    return "Algun perfil"
  }
}
