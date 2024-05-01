import { CoveragesService } from './coverages.service';
import { CreateCoverageInput } from './dto/create-coverage.input';
import { UpdateCoverageInput } from './dto/update-coverage.input';
export declare class CoveragesResolver {
    private readonly coveragesService;
    constructor(coveragesService: CoveragesService);
    createCoverage(createCoverageInput: CreateCoverageInput): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        procedures: ({
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
        })[];
    } & {
        id: number;
        name: string;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CoverageClient<{
        procedures: {
            id: number;
            name: string;
            description: string;
            coverageId: number;
        }[];
    } & {
        id: number;
        name: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateCoverage(updateCoverageInput: UpdateCoverageInput): string;
    removeCoverage(id: number): string;
}
