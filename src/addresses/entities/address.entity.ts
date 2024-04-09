import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsEmpty, IsIn, IsOptional, isEmpty } from 'class-validator';

@ObjectType()
export class Address {
  @Field(() => Int)
  id: number

  @Field()
  street: string

  @Field()
  number: string

  @Field()
  @IsOptional()
  @IsEmpty()
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
  @IsIn(['billing', 'delivery'])
  addressType: string

  @Field()
  userId: number
}
