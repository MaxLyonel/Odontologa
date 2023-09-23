import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {

    interface DatabaseConfig {
      host: string,
      port: number
    }
    const dbConfig = this.configService.get<DatabaseConfig>('database');
    // const dbUser = this.configService.get<string>('DATABASE_USER');
    // return dbConfig.port + ' ' + dbConfig.host ;
    return this.configService.get<string>('database.user', 'leonel');
  }
}
