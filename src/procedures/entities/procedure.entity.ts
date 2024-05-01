import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PolicyProcedure } from '@prisma/client';
import { Coverage } from 'src/coverages/entities/coverage.entity';
import { ProcedureByPlan } from 'src/procedures-by-plan/entities/procedure-by-plan.entity';

@ObjectType()
export class Procedure {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  coverageId: number;

  @Field()
  coverage?: Coverage;

  // @Field()
  // proceduresByPlan: ProceduresByPlan[]

  @Field(() => [ProcedureByPlan], { nullable: true })
  proceduresByPlan: ProcedureByPlan[]

  // @Field()
  // policiesProcedure: PolicyProcedure[]
}
