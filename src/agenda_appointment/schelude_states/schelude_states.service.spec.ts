import { Test, TestingModule } from '@nestjs/testing';
import { ScheludeStatesService } from './schelude_states.service';

describe('ScheludeStatesService', () => {
  let service: ScheludeStatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheludeStatesService],
    }).compile();

    service = module.get<ScheludeStatesService>(ScheludeStatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
