import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProceduresByPlanService } from './procedures-by-plan.service';
import { ProcedureByPlan } from './entities/procedure-by-plan.entity';
import { CreateProcedureByPlanInput } from './dto/create-procedure-by-plan.input';
import { UpdateProcedureByPlanInput } from './dto/update-procedure-by-plan.input';

@Resolver(() => ProcedureByPlan)
export class ProceduresByPlanResolver {
  constructor(private readonly proceduresByPlanService: ProceduresByPlanService) {}

  @Mutation(() => ProcedureByPlan)
  createProceduresByPlan(@Args('createProcedureByPlanInput') createProcedureByPlanInput: CreateProcedureByPlanInput) {
    return this.proceduresByPlanService.create(createProcedureByPlanInput);
  }

  @Query(() => [ProcedureByPlan], { name: 'proceduresByPlan' })
  findAll() {
    return this.proceduresByPlanService.findAll();
  }

  @Query(() => ProcedureByPlan, { name: 'procedureByPlan' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.proceduresByPlanService.findOne(id);
  }

  @Query(() => [ProcedureByPlan], { name: 'proceduresByPlanId' })
  async findByPlan(@Args('planId', { type: () => Int }) planId: number) {
    return await this.proceduresByPlanService.findByPlan(planId);
  }

  @Mutation(() => ProcedureByPlan)
  updateProceduresByPlan(@Args('updateProcedureByPlanInput') updateProcedureByPlanInput: UpdateProcedureByPlanInput) {
    return this.proceduresByPlanService.update(updateProcedureByPlanInput.id, updateProcedureByPlanInput);
  }

  @Mutation(() => ProcedureByPlan)
  removeProceduresByPlan(@Args('id', { type: () => Int }) id: number) {
    return this.proceduresByPlanService.remove(id);
  }
}
