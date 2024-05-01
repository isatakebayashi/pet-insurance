import { CreateCoverageInput } from './create-coverage.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCoverageInput extends PartialType(CreateCoverageInput) {
  @Field(() => Int)
  id: number;
}
