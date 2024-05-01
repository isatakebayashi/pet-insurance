import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CoveragesService } from './coverages.service';
import { Coverage } from './entities/coverage.entity';
import { CreateCoverageInput } from './dto/create-coverage.input';
import { UpdateCoverageInput } from './dto/update-coverage.input';

@Resolver(() => Coverage)
export class CoveragesResolver {
  constructor(private readonly coveragesService: CoveragesService) {}

  @Mutation(() => Coverage)
  createCoverage(@Args('createCoverageInput') createCoverageInput: CreateCoverageInput) {
    return this.coveragesService.create(createCoverageInput);
  }

  @Query(() => [Coverage], { name: 'coverages' })
  findAll() {
    return this.coveragesService.findAll();
  }

  @Query(() => Coverage, { name: 'coverage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.coveragesService.findOne(id);
  }

  @Mutation(() => Coverage)
  updateCoverage(@Args('updateCoverageInput') updateCoverageInput: UpdateCoverageInput) {
    return this.coveragesService.update(updateCoverageInput.id, updateCoverageInput);
  }

  @Mutation(() => Coverage)
  removeCoverage(@Args('id', { type: () => Int }) id: number) {
    return this.coveragesService.remove(id);
  }
}
