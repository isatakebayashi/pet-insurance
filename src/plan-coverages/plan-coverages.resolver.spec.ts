import { Test, TestingModule } from '@nestjs/testing';
import { PlanCoveragesResolver } from './plan-coverages.resolver';
import { PlanCoveragesService } from './plan-coverages.service';

describe('PlanCoveragesResolver', () => {
  let resolver: PlanCoveragesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanCoveragesResolver, PlanCoveragesService],
    }).compile();

    resolver = module.get<PlanCoveragesResolver>(PlanCoveragesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
