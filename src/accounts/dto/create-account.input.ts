import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAccountInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
}
