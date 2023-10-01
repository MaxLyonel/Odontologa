import { Injectable } from '@nestjs/common';
import { CreateStageTypeDto } from './dto/create-stage_type.dto';
import { UpdateStageTypeDto } from './dto/update-stage_type.dto';

@Injectable()
export class StageTypesService {
  create(createStageTypeDto: CreateStageTypeDto) {
    return 'This action adds a new stageType';
  }

  findAll() {
    return `This action returns all stageTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stageType`;
  }

  update(id: number, updateStageTypeDto: UpdateStageTypeDto) {
    return `This action updates a #${id} stageType`;
  }

  remove(id: number) {
    return `This action removes a #${id} stageType`;
  }
}
