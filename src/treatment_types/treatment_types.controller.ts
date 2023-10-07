import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TreatmentTypesService } from './treatment_types.service';
import { CreateTreatmentTypeDto } from './dto/create-treatment_type.dto';
import { UpdateTreatmentTypeDto } from './dto/update-treatment_type.dto';

@Controller('treatment-types')
export class TreatmentTypesController {
  constructor(private readonly treatmentTypesService: TreatmentTypesService) {}

  @Post()
  create(@Body() createTreatmentTypeDto: CreateTreatmentTypeDto) {
    return this.treatmentTypesService.create(createTreatmentTypeDto);
  }

  @Get()
  findAll() {
    return this.treatmentTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treatmentTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTreatmentTypeDto: UpdateTreatmentTypeDto) {
    return this.treatmentTypesService.update(+id, updateTreatmentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treatmentTypesService.remove(+id);
  }
}
