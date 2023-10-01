import { Module } from '@nestjs/common';
import { ScheludeStatesService } from './schelude_states.service';
import { ScheludeStatesController } from './schelude_states.controller';

@Module({
  controllers: [ScheludeStatesController],
  providers: [ScheludeStatesService],
})
export class ScheludeStatesModule {}
