import { PartialType } from '@nestjs/mapped-types';
import { CreateScheludeDto } from './create-schelude.dto';

export class UpdateScheludeDto extends PartialType(CreateScheludeDto) {}
