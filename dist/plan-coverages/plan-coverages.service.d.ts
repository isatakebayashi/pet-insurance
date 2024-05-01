import { CreatePlanCoverageInput } from './dto/create-plan-coverage.input';
import { UpdatePlanCoverageInput } from './dto/update-plan-coverage.input';
import { PrismaService } from 'src/prisma.service';
export declare class PlanCoveragesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createPlanCoverageInput: CreatePlanCoverageInput): Promise<{
        id: number;
        planId: number;
        coverageId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        plan: {
            id: number;
            name: string;
            description: string;
            value: number;
            createdAt: Date;
            updatedAt: Date;
        };
        coverage: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        planId: number;
        coverageId: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PlanCoverageClient<{
        plan: {
            id: number;
            name: string;
            description: string;
            value: number;
            createdAt: Date;
            updatedAt: Date;
        };
        coverage: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        planId: number;
        coverageId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updatePlanCoverageInput: UpdatePlanCoverageInput): string;
    remove(id: number): string;
}
