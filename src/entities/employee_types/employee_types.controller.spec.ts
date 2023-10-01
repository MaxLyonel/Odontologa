import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeTypesController } from './employee_types.controller';
import { EmployeeTypesService } from './employee_types.service';

describe('EmployeeTypesController', () => {
  let controller: EmployeeTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeTypesController],
      providers: [EmployeeTypesService],
    }).compile();

    controller = module.get<EmployeeTypesController>(EmployeeTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
