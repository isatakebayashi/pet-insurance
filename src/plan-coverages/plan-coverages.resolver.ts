import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlanCoveragesService } from './plan-coverages.service';
import { PlanCoverage } from './entities/plan-coverage.entity';
import { CreatePlanCoverageInput } from './dto/create-plan-coverage.input';
import { UpdatePlanCoverageInput } from './dto/update-plan-coverage.input';

@Resolver(() => PlanCoverage)
export class PlanCoveragesResolver {
  constructor(private readonly planCoveragesService: PlanCoveragesService) {}

  @Mutation(() => PlanCoverage)
  createPlanCoverage(@Args('createPlanCoverageInput') createPlanCoverageInput: CreatePlanCoverageInput) {
    return this.planCoveragesService.create(createPlanCoverageInput);
  }

  @Query(() => [PlanCoverage], { name: 'planCoverages' })
  findAll() {
    return this.planCoveragesService.findAll();
  }

  @Query(() => PlanCoverage, { name: 'planCoverage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.planCoveragesService.findOne(id);
  }

  @Mutation(() => PlanCoverage)
  updatePlanCoverage(@Args('updatePlanCoverageInput') updatePlanCoverageInput: UpdatePlanCoverageInput) {
    return this.planCoveragesService.update(updatePlanCoverageInput.id, updatePlanCoverageInput);
  }

  @Mutation(() => PlanCoverage)
  removePlanCoverage(@Args('id', { type: () => Int }) id: number) {
    return this.planCoveragesService.remove(id);
  }
}
