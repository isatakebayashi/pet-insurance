import { Test, TestingModule } from '@nestjs/testing';
import { ProceduresByPlanResolver } from './procedures-by-plan.resolver';
import { ProceduresByPlanService } from './procedures-by-plan.service';

describe('ProceduresByPlanResolver', () => {
  let resolver: ProceduresByPlanResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProceduresByPlanResolver, ProceduresByPlanService],
    }).compile();

    resolver = module.get<ProceduresByPlanResolver>(ProceduresByPlanResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
