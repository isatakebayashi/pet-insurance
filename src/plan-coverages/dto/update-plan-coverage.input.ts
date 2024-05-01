import { CreatePlanCoverageInput } from './create-plan-coverage.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlanCoverageInput extends PartialType(CreatePlanCoverageInput) {
  @Field(() => Int)
  id: number;
}
