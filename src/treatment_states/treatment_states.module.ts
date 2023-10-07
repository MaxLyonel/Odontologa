import { Module } from '@nestjs/common';
import { TreatmentStatesService } from './treatment_states.service';
import { TreatmentStatesController } from './treatment_states.controller';

@Module({
  controllers: [TreatmentStatesController],
  providers: [TreatmentStatesService],
})
export class TreatmentStatesModule {}
