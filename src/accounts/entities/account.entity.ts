import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Account {
  @Field(() => Int)
  id: number;

  @Field()
  name: string

  @Field(() => [User], { nullable: true })
  users: User[]
}
