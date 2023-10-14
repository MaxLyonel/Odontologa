import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserModule } from 'src/users_roles/users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth/auth.guard';

@Module({
  imports: [ // lista de modulos que exporta los proovedores
    UserModule,
    JwtModule.registerAsync({
      inject: [ ConfigService ],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: 28800
        }
      })
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AuthModule {}
