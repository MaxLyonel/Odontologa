import { Injectable } from '@nestjs/common';
import { CreateTreatmentStateDto } from './dto/create-treatment_state.dto';
import { UpdateTreatmentStateDto } from './dto/update-treatment_state.dto';

@Injectable()
export class TreatmentStatesService {
  create(createTreatmentStateDto: CreateTreatmentStateDto) {
    return 'This action adds a new treatmentState';
  }

  findAll() {
    return `This action returns all treatmentStates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} treatmentState`;
  }

  update(id: number, updateTreatmentStateDto: UpdateTreatmentStateDto) {
    return `This action updates a #${id} treatmentState`;
  }

  remove(id: number) {
    return `This action removes a #${id} treatmentState`;
  }
}
