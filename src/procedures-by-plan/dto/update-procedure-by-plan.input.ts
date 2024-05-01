import { CreateProcedureByPlanInput } from './create-procedure-by-plan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProcedureByPlanInput extends PartialType(CreateProcedureByPlanInput) {
  @Field(() => Int)
  id: number;
}
