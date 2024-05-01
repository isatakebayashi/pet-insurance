import { ProceduresByPlanService } from './procedures-by-plan.service';
import { CreateProcedureByPlanInput } from './dto/create-procedure-by-plan.input';
import { UpdateProcedureByPlanInput } from './dto/update-procedure-by-plan.input';
export declare class ProceduresByPlanResolver {
    private readonly proceduresByPlanService;
    constructor(proceduresByPlanService: ProceduresByPlanService);
    createProceduresByPlan(createProcedureByPlanInput: CreateProcedureByPlanInput): Promise<{
        id: number;
        availableLimit: string;
        share: number;
        valueToAnticipate: number;
        procedureId: number;
        planId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        procedure: {
            id: number;
            name: string;
            description: string;
            coverageId: number;
        };
        plan: {
            id: number;
            name: string;
            description: string;
            value: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        availableLimit: string;
        share: number;
        valueToAnticipate: number;
        procedureId: number;
        planId: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProcedureByPlanClient<{
        procedure: {
            id: number;
            name: string;
            description: string;
            coverageId: number;
        };
        plan: {
            id: number;
            name: string;
            description: string;
            value: number;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        availableLimit: string;
        share: number;
        valueToAnticipate: number;
        procedureId: number;
        planId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findByPlan(planId: number): Promise<{
        id: number;
        availableLimit: string;
        share: number;
        valueToAnticipate: number;
        procedureId: number;
        planId: number;
    }[]>;
    updateProceduresByPlan(updateProcedureByPlanInput: UpdateProcedureByPlanInput): string;
    removeProceduresByPlan(id: number): string;
}
