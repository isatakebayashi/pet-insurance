import { PoliciesService } from './policies.service';
import { CreatePolicyInput } from './dto/create-policy.input';
import { UpdatePolicyInput } from './dto/update-policy.input';
export declare class PoliciesResolver {
    private readonly policiesService;
    constructor(policiesService: PoliciesService);
    createPolicy(createPolicyInput: CreatePolicyInput): string;
    findAll(): string;
    findOne(id: number): string;
    updatePolicy(updatePolicyInput: UpdatePolicyInput): string;
    removePolicy(id: number): string;
}
