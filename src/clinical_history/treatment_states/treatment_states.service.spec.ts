import { Test, TestingModule } from '@nestjs/testing';
import { TreatmentStatesService } from './treatment_states.service';

describe('TreatmentStatesService', () => {
  let service: TreatmentStatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreatmentStatesService],
    }).compile();

    service = module.get<TreatmentStatesService>(TreatmentStatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
