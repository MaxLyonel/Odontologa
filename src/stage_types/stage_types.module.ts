import { Module } from '@nestjs/common';
import { StageTypesService } from './stage_types.service';
import { StageTypesController } from './stage_types.controller';

@Module({
  controllers: [StageTypesController],
  providers: [StageTypesService],
})
export class StageTypesModule {}
