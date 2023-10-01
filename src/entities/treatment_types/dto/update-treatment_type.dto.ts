import { PartialType } from '@nestjs/mapped-types';
import { CreateTreatmentTypeDto } from './create-treatment_type.dto';

export class UpdateTreatmentTypeDto extends PartialType(CreateTreatmentTypeDto) {}
