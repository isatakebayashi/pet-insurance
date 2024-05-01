import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Coverage } from 'src/coverages/entities/coverage.entity';
import { Plan } from 'src/plans/entities/plan.entity';

@ObjectType()
export class PlanCoverage {
  @Field(() => Int)
  id: number;

  @Field()
  planId: number;

  @Field()
  plan?: Plan;

  @Field()
  coverageId: number;

  @Field()
  coverage?: Coverage;
}
