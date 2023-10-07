import { Injectable } from '@nestjs/common';
import { CreateTreatmentTypeDto } from './dto/create-treatment_type.dto';
import { UpdateTreatmentTypeDto } from './dto/update-treatment_type.dto';

@Injectable()
export class TreatmentTypesService {
  create(createTreatmentTypeDto: CreateTreatmentTypeDto) {
    return 'This action adds a new treatmentType';
  }

  findAll() {
    return `This action returns all treatmentTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} treatmentType`;
  }

  update(id: number, updateTreatmentTypeDto: UpdateTreatmentTypeDto) {
    return `This action updates a #${id} treatmentType`;
  }

  remove(id: number) {
    return `This action removes a #${id} treatmentType`;
  }
}
