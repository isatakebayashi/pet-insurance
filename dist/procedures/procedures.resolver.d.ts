import { ProceduresService } from './procedures.service';
import { CreateProcedureInput } from './dto/create-procedure.input';
import { UpdateProcedureInput } from './dto/update-procedure.input';
export declare class ProceduresResolver {
    private readonly proceduresService;
    constructor(proceduresService: ProceduresService);
    createProcedure(createProcedureInput: CreateProcedureInput): Promise<{
        id: number;
        name: string;
        description: string;
        coverageId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        proceduresByPlan: {
            id: number;
            availableLimit: string;
            share: number;
            valueToAnticipate: number;
            procedureId: number;
            planId: number;
        }[];
    } & {
        id: number;
        name: string;
        description: string;
        coverageId: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProcedureClient<{
        id: number;
        name: string;
        description: string;
        coverageId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateProcedure(updateProcedureInput: UpdateProcedureInput): string;
    removeProcedure(id: number): string;
}
