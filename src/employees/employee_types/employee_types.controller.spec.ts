import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeTypeController } from './employee_types.controller';
import { EmployeeTypeService } from './employee_types.service';

describe('EmployeeTypeController', () => {
  let controller: EmployeeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeTypeController],
      providers: [EmployeeTypeService],
    }).compile();

    controller = module.get<EmployeeTypeController>(EmployeeTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
