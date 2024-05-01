import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, ValidateIf } from 'class-validator';
import { Plan } from 'src/plans/entities/plan.entity';
import { Procedure } from 'src/procedures/entities/procedure.entity';

@ObjectType()
export class ProcedureByPlan {
  @Field(() => Int)
  id: number;

  @Field()
  availableLimit: string;

  @Field()
  share: number;

  @ValidateIf(o => o.availableLimit !== 'unlimited')
  @IsNotEmpty()
  @Field()
  valueToAnticipate?: number;

  @Field()
  procedureId: number;

  @Field()
  procedure?: Procedure;

  @Field()
  planId: number;

  @Field()
  plan?: Plan;
}
