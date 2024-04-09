import { InputType, Int, Field } from '@nestjs/graphql';
import { IsIn } from 'class-validator';

@InputType()
export class CreatePetInput {
  @Field()
  @IsIn(['dog', 'cat'])
  type: string

  @Field()
  name: string

  @Field()
  breed: string

  @Field()
  birthDate: Date

  @Field()
  userId: number
}