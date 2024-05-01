import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlanInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  value: number;
}
