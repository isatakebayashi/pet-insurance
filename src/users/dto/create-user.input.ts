import { InputType, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsOptional } from 'class-validator';
import { IsIn } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  name: string

  @Field()
  email: string

  @Field()
  password: string

  @Field()
  accountId: number

  @Field()
  pets?: CreateUserPetInput[]//Prisma.PetCreateNestedManyWithoutUserInput[]
}

@InputType()
export class CreateUserPetInput {
  @Field()
  @IsIn(['dog', 'cat'])
  type: string

  @Field()
  name: string

  @Field()
  breed: string

  @Field()
  birthDate: Date
}

