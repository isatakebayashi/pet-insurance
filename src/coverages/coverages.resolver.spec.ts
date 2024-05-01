import { Test, TestingModule } from '@nestjs/testing';
import { CoveragesResolver } from './coverages.resolver';
import { CoveragesService } from './coverages.service';

describe('CoveragesResolver', () => {
  let resolver: CoveragesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoveragesResolver, CoveragesService],
    }).compile();

    resolver = module.get<CoveragesResolver>(CoveragesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
