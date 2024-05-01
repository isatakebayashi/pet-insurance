import { Coverage } from 'src/coverages/entities/coverage.entity';
import { ProcedureByPlan } from 'src/procedures-by-plan/entities/procedure-by-plan.entity';
export declare class Procedure {
    id: number;
    name: string;
    description: string;
    coverageId: number;
    coverage?: Coverage;
    proceduresByPlan: ProcedureByPlan[];
}
