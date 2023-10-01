import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheludesService } from './scheludes.service';
import { CreateScheludeDto } from './dto/create-schelude.dto';
import { UpdateScheludeDto } from './dto/update-schelude.dto';

@Controller('scheludes')
export class ScheludesController {
  constructor(private readonly scheludesService: ScheludesService) {}

  @Post()
  create(@Body() createScheludeDto: CreateScheludeDto) {
    return this.scheludesService.create(createScheludeDto);
  }

  @Get()
  findAll() {
    return this.scheludesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheludesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheludeDto: UpdateScheludeDto) {
    return this.scheludesService.update(+id, updateScheludeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheludesService.remove(+id);
  }
}
