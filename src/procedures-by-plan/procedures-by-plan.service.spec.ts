import { Test, TestingModule } from '@nestjs/testing';
import { ProceduresByPlanService } from './procedures-by-plan.service';

describe('ProceduresByPlanService', () => {
  let service: ProceduresByPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProceduresByPlanService],
    }).compile();

    service = module.get<ProceduresByPlanService>(ProceduresByPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
