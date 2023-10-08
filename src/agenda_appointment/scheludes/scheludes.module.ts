import { Module } from '@nestjs/common';
import { ScheludesService } from './scheludes.service';
import { ScheludesController } from './scheludes.controller';

@Module({
  controllers: [ScheludesController],
  providers: [ScheludesService],
})
export class ScheludesModule {}
