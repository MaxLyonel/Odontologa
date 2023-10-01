import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheludeStatesService } from './schelude_states.service';
import { CreateScheludeStateDto } from './dto/create-schelude_state.dto';
import { UpdateScheludeStateDto } from './dto/update-schelude_state.dto';

@Controller('schelude-states')
export class ScheludeStatesController {
  constructor(private readonly scheludeStatesService: ScheludeStatesService) {}

  @Post()
  create(@Body() createScheludeStateDto: CreateScheludeStateDto) {
    return this.scheludeStatesService.create(createScheludeStateDto);
  }

  @Get()
  findAll() {
    return this.scheludeStatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheludeStatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheludeStateDto: UpdateScheludeStateDto) {
    return this.scheludeStatesService.update(+id, updateScheludeStateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheludeStatesService.remove(+id);
  }
}
