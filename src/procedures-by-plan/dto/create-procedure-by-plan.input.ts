import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, ValidateIf } from 'class-validator';

@InputType()
export class CreateProcedureByPlanInput {
 @Field()
  availableLimit: string;

  @Field()
  share: number;

  @Field()
  @ValidateIf(o => o.availableLimit !== 'unlimited')
  @IsNotEmpty()
  valueToAnticipate?: number;

  @Field()
  procedureId: number;

  @Field()
  planId: number;
}
