import { PartialType } from '@nestjs/mapped-types';
import { CreateTreatmentStateDto } from './create-treatment_state.dto';

export class UpdateTreatmentStateDto extends PartialType(CreateTreatmentStateDto) {}
