import { CreatePolicyInput } from './dto/create-policy.input';
import { UpdatePolicyInput } from './dto/update-policy.input';
export declare class PoliciesService {
    create(createPolicyInput: CreatePolicyInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePolicyInput: UpdatePolicyInput): string;
    remove(id: number): string;
}
