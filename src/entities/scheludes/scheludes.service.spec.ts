import { Test, TestingModule } from '@nestjs/testing';
import { ScheludesService } from './scheludes.service';

describe('ScheludesService', () => {
  let service: ScheludesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheludesService],
    }).compile();

    service = module.get<ScheludesService>(ScheludesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
