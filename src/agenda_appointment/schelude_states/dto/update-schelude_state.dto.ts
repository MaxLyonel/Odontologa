import { PartialType } from '@nestjs/mapped-types';
import { CreateScheludeStateDto } from './create-schelude_state.dto';

export class UpdateScheludeStateDto extends PartialType(CreateScheludeStateDto) {}
