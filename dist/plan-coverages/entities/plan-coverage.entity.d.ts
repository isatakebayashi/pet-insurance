import { Coverage } from 'src/coverages/entities/coverage.entity';
import { Plan } from 'src/plans/entities/plan.entity';
export declare class PlanCoverage {
    id: number;
    planId: number;
    plan?: Plan;
    coverageId: number;
    coverage?: Coverage;
}
