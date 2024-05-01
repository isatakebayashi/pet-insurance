import { Test, TestingModule } from '@nestjs/testing';
import { PoliciesResolver } from './policies.resolver';
import { PoliciesService } from './policies.service';

describe('PoliciesResolver', () => {
  let resolver: PoliciesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoliciesResolver, PoliciesService],
    }).compile();

    resolver = module.get<PoliciesResolver>(PoliciesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
