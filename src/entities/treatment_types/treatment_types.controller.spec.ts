import { Test, TestingModule } from '@nestjs/testing';
import { TreatmentTypesController } from './treatment_types.controller';
import { TreatmentTypesService } from './treatment_types.service';

describe('TreatmentTypesController', () => {
  let controller: TreatmentTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TreatmentTypesController],
      providers: [TreatmentTypesService],
    }).compile();

    controller = module.get<TreatmentTypesController>(TreatmentTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
