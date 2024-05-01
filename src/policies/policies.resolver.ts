import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PoliciesService } from './policies.service';
import { Policy } from './entities/policy.entity';
import { CreatePolicyInput } from './dto/create-policy.input';
import { UpdatePolicyInput } from './dto/update-policy.input';

@Resolver(() => Policy)
export class PoliciesResolver {
  constructor(private readonly policiesService: PoliciesService) {}

  @Mutation(() => Policy)
  createPolicy(@Args('createPolicyInput') createPolicyInput: CreatePolicyInput) {
    return this.policiesService.create(createPolicyInput);
  }

  @Query(() => [Policy], { name: 'policies' })
  findAll() {
    return this.policiesService.findAll();
  }

  @Query(() => Policy, { name: 'policy' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.policiesService.findOne(id);
  }

  @Mutation(() => Policy)
  updatePolicy(@Args('updatePolicyInput') updatePolicyInput: UpdatePolicyInput) {
    return this.policiesService.update(updatePolicyInput.id, updatePolicyInput);
  }

  @Mutation(() => Policy)
  removePolicy(@Args('id', { type: () => Int }) id: number) {
    return this.policiesService.remove(id);
  }
}
