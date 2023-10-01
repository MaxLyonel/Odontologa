import { Module } from '@nestjs/common';
import { TreatmentTypesService } from './treatment_types.service';
import { TreatmentTypesController } from './treatment_types.controller';

@Module({
  controllers: [TreatmentTypesController],
  providers: [TreatmentTypesService],
})
export class TreatmentTypesModule {}
