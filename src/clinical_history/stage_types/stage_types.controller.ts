import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StageTypesService } from './stage_types.service';
import { CreateStageTypeDto } from './dto/create-stage_type.dto';
import { UpdateStageTypeDto } from './dto/update-stage_type.dto';

@Controller('stage-types')
export class StageTypesController {
  constructor(private readonly stageTypesService: StageTypesService) {}

  @Post()
  create(@Body() createStageTypeDto: CreateStageTypeDto) {
    return this.stageTypesService.create(createStageTypeDto);
  }

  @Get()
  findAll() {
    return this.stageTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stageTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStageTypeDto: UpdateStageTypeDto) {
    return this.stageTypesService.update(+id, updateStageTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stageTypesService.remove(+id);
  }
}
