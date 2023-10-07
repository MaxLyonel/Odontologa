import { Test, TestingModule } from '@nestjs/testing';
import { ScheludeStatesController } from './schelude_states.controller';
import { ScheludeStatesService } from './schelude_states.service';

describe('ScheludeStatesController', () => {
  let controller: ScheludeStatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheludeStatesController],
      providers: [ScheludeStatesService],
    }).compile();

    controller = module.get<ScheludeStatesController>(ScheludeStatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
