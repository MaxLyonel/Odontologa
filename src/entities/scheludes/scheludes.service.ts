import { Injectable } from '@nestjs/common';
import { CreateScheludeDto } from './dto/create-schelude.dto';
import { UpdateScheludeDto } from './dto/update-schelude.dto';

@Injectable()
export class ScheludesService {
  create(createScheludeDto: CreateScheludeDto) {
    return 'This action adds a new schelude';
  }

  findAll() {
    return `This action returns all scheludes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schelude`;
  }

  update(id: number, updateScheludeDto: UpdateScheludeDto) {
    return `This action updates a #${id} schelude`;
  }

  remove(id: number) {
    return `This action removes a #${id} schelude`;
  }
}
