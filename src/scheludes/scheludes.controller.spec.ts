import { Test, TestingModule } from '@nestjs/testing';
import { ScheludesController } from './scheludes.controller';
import { ScheludesService } from './scheludes.service';

describe('ScheludesController', () => {
  let controller: ScheludesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheludesController],
      providers: [ScheludesService],
    }).compile();

    controller = module.get<ScheludesController>(ScheludesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
