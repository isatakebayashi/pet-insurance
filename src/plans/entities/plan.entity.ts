import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PlanCoverage } from 'src/plan-coverages/entities/plan-coverage.entity';
import { Policy } from 'src/policies/entities/policy.entity';
import { ProcedureByPlan } from 'src/procedures-by-plan/entities/procedure-by-plan.entity';

@ObjectType()
export class Plan {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  value: number;

  @Field()
  policies: Policy[]

  @Field(() => [ProcedureByPlan], { nullable: true })
  proceduresByPlan: ProcedureByPlan[]

  @Field(() => [PlanCoverage], { nullable: true })
  coverages: PlanCoverage[]}
