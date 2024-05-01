import { PlanCoverage } from 'src/plan-coverages/entities/plan-coverage.entity';
import { Procedure } from 'src/procedures/entities/procedure.entity';
export declare class Coverage {
    id: number;
    name: string;
    procedures: Procedure[];
    coverages: PlanCoverage[];
}
