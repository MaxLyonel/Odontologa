import { Test, TestingModule } from '@nestjs/testing';
import { StageTypesController } from './stage_types.controller';
import { StageTypesService } from './stage_types.service';

describe('StageTypesController', () => {
  let controller: StageTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StageTypesController],
      providers: [StageTypesService],
    }).compile();

    controller = module.get<StageTypesController>(StageTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
