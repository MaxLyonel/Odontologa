import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TreatmentStatesService } from './treatment_states.service';
import { CreateTreatmentStateDto } from './dto/create-treatment_state.dto';
import { UpdateTreatmentStateDto } from './dto/update-treatment_state.dto';

@Controller('treatment-states')
export class TreatmentStatesController {
  constructor(private readonly treatmentStatesService: TreatmentStatesService) {}

  @Post()
  create(@Body() createTreatmentStateDto: CreateTreatmentStateDto) {
    return this.treatmentStatesService.create(createTreatmentStateDto);
  }

  @Get()
  findAll() {
    return this.treatmentStatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treatmentStatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTreatmentStateDto: UpdateTreatmentStateDto) {
    return this.treatmentStatesService.update(+id, updateTreatmentStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treatmentStatesService.remove(+id);
  }
}
