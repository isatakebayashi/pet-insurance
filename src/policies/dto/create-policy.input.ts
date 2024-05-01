import { InputType, Int, Field } from '@nestjs/graphql';
import { IsIn } from 'class-validator';

@InputType()
export class CreatePolicyInput {
  // @Field()
  // petId: number;

  @Field()
  microchipNumber: string;

  @Field()
  @IsIn(['active', 'inactive'])
  status: string;

  @Field()
  initialGraceDate: Date;

  @Field()
  renewalOfLimits: Date;

//   @Field()
//   planId: number;
// }
