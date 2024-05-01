import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsIn } from 'class-validator';
import { Pet } from 'src/pets/entities/pet.entity';
import { Plan } from 'src/plans/entities/plan.entity';

@ObjectType()
export class Policy {
  @Field(() => Int)
  id: number;

  @Field()
  pet?: Pet;

  @Field()
  petId: number;

  @Field()
  microchipNumber: string;

  @Field()
  @IsIn(['active', 'inactive'])
  status: string;

  @Field()
  initialGraceDate: Date;

  @Field()
  renewalOfLimits: Date;

  @Field()
  plan?: Plan

  @Field()
  planId: number;
}
