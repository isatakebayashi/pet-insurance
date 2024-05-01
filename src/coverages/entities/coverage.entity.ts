import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PlanCoverage } from 'src/plan-coverages/entities/plan-coverage.entity';
import { Plan } from 'src/plans/entities/plan.entity';
import { ProcedureByPlan } from 'src/procedures-by-plan/entities/procedure-by-plan.entity';
import { Procedure } from 'src/procedures/entities/procedure.entity';

@ObjectType()
export class Coverage {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Procedure], { nullable: true })
  procedures: Procedure[]

  @Field(() => [PlanCoverage], { nullable: true })
  coverages: PlanCoverage[]
}
