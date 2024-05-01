import { Plan } from 'src/plans/entities/plan.entity';
import { Procedure } from 'src/procedures/entities/procedure.entity';
export declare class ProceduresByPlan {
    id: number;
    availableLimit: string;
    share: number;
    valueToAnticipate?: number;
    procedureId: number;
    procedure?: Procedure;
    planId: number;
    plan?: Plan;
}
