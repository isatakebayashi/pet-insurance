import { CreateAddressInput } from './create-address.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
  @Field(() => Int)
  id: number;

  @Field()
  street: string

  @Field()
  number: string

  @Field()
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
