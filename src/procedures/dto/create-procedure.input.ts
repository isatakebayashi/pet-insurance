import { InputType, Int, Field } from '@nestjs/graphql';
import { Coverage } from 'src/coverages/entities/coverage.entity';

@InputType()
export class CreateProcedureInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  coverageId: number;

  // @Field()
  // coverage?: Coverage;
}
