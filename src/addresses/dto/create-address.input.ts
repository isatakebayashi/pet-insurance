import { InputType, Int, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class CreateAddressInput {
  @Field()
  street: string

  @Field()
  number: string

  @Field()
  @IsOptional()
  complement: string

  @Field()
  neighborhood: string

  @Field()
  zipcode: string

  @Field()
  city: string

  @Field()
  state: string

  @Field()
  addressType: string

  @Field()
  userId: number
}
