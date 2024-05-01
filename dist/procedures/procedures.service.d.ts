import { CreateProcedureInput } from './dto/create-procedure.input';
import { UpdateProcedureInput } from './dto/update-procedure.input';
import { PrismaService } from 'src/prisma.service';
export declare class ProceduresService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createProcedureInput: CreateProcedureInput): Promise<{
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
    update(id: number, updateProcedureInput: UpdateProcedureInput): string;
    remove(id: number): string;
}
