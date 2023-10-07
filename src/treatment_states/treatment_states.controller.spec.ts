import { Test, TestingModule } from '@nestjs/testing';
import { TreatmentStatesController } from './treatment_states.controller';
import { TreatmentStatesService } from './treatment_states.service';

describe('TreatmentStatesController', () => {
  let controller: TreatmentStatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TreatmentStatesController],
      providers: [TreatmentStatesService],
    }).compile();

    controller = module.get<TreatmentStatesController>(TreatmentStatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
