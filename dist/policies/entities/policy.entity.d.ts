import { Pet } from 'src/pets/entities/pet.entity';
import { Plan } from 'src/plans/entities/plan.entity';
export declare class Policy {
    id: number;
    pet: Pet;
    petId: number;
    microchipNumber: string;
    status: string;
    initialGraceDate: Date;
    renewalOfLimits: Date;
    plan: Plan;
    planId: number;
}
