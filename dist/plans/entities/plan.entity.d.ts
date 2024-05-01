import { PlanCoverage } from 'src/plan-coverages/entities/plan-coverage.entity';
import { Policy } from 'src/policies/entities/policy.entity';
import { ProcedureByPlan } from 'src/procedures-by-plan/entities/procedure-by-plan.entity';
export declare class Plan {
    id: number;
    name: string;
    description: string;
    value: number;
    policies: Policy[];
    proceduresByPlan: ProcedureByPlan[];
    coverages: PlanCoverage[];
}
