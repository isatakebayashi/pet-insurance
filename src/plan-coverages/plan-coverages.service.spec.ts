import { Test, TestingModule } from '@nestjs/testing';
import { PlanCoveragesService } from './plan-coverages.service';

describe('PlanCoveragesService', () => {
  let service: PlanCoveragesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanCoveragesService],
    }).compile();

    service = module.get<PlanCoveragesService>(PlanCoveragesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
