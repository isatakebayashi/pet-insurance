import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlanCoverageInput {
  @Field()
  planId: number;

  @Field()
  coverageId: number;
}
