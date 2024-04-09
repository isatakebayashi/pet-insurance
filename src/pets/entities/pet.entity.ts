import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsIn } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Pet {
  @Field(() => Int)
  id: number;

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

  @Field()
  user?: User
}
