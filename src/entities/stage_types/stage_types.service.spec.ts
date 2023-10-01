import { Test, TestingModule } from '@nestjs/testing';
import { StageTypesService } from './stage_types.service';

describe('StageTypesService', () => {
  let service: StageTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StageTypesService],
    }).compile();

    service = module.get<StageTypesService>(StageTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
