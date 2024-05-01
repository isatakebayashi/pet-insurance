import { PlanCoveragesService } from './plan-coverages.service';
import { CreatePlanCoverageInput } from './dto/create-plan-coverage.input';
import { UpdatePlanCoverageInput } from './dto/update-plan-coverage.input';
export declare class PlanCoveragesResolver {
    private readonly planCoveragesService;
    constructor(planCoveragesService: PlanCoveragesService);
    createPlanCoverage(createPlanCoverageInput: CreatePlanCoverageInput): Promise<{
        id: number;
        planId: number;
        coverageId: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        coverage: {
            id: number;
            name: string;
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
        planId: number;
        coverageId: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PlanCoverageClient<{
        coverage: {
            id: number;
            name: string;
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
        planId: number;
        coverageId: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updatePlanCoverage(updatePlanCoverageInput: UpdatePlanCoverageInput): string;
    removePlanCoverage(id: number): string;
}
