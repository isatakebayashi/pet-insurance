import { CreateCoverageInput } from './dto/create-coverage.input';
import { UpdateCoverageInput } from './dto/update-coverage.input';
import { PrismaService } from 'src/prisma.service';
export declare class CoveragesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createCoverageInput: CreateCoverageInput): Promise<{
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
    update(id: number, updateCoverageInput: UpdateCoverageInput): string;
    remove(id: number): string;
}
