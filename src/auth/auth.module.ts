import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from 'src/users_roles/users/users.module';
import { RolesModule } from 'src/users_roles/roles/roles.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth/auth.guard';
import { RolesGuard } from './guards/roles/roles.guard';

@Module({
  imports: [ // lista de modulos que exporta los proovedores
    UserModule,
    RolesModule,
    JwtModule.registerAsync({
      // imports: [ConfigModule],
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
  providers: [AuthService, { provide: APP_GUARD, useClass: AuthGuard}, {provide: APP_GUARD, useClass: RolesGuard}],
})
export class AuthModule {}
