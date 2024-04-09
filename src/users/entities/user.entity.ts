import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Address } from 'src/addresses/entities/address.entity';
import { Pet } from 'src/pets/entities/pet.entity';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field()
  name: string

  @Field()
  email: string

  @Field()
  password: string

  @Field()
  accountId: number

  @Field(() => [Address], { nullable: true })
  addresses: Address[]

  @Field(() => [Pet], { nullable: true })
  pets: Pet[]
}
