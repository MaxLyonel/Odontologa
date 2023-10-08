import { Injectable } from '@nestjs/common';
import { CreateScheludeStateDto } from './dto/create-schelude_state.dto';
import { UpdateScheludeStateDto } from './dto/update-schelude_state.dto';

@Injectable()
export class ScheludeStatesService {
  create(createScheludeStateDto: CreateScheludeStateDto) {
    return 'This action adds a new scheludeState';
  }

  findAll() {
    return `This action returns all scheludeStates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scheludeState`;
  }

  update(id: number, updateScheludeStateDto: UpdateScheludeStateDto) {
    return `This action updates a #${id} scheludeState`;
  }

  remove(id: number) {
    return `This action removes a #${id} scheludeState`;
  }
}
