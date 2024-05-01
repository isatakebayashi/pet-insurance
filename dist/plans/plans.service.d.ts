import { CreatePlanInput } from './dto/create-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';
import { PrismaService } from 'src/prisma.service';
export declare class PlansService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createPlanInput: CreatePlanInput): Promise<{
        id: number;
        name: string;
        description: string;
        value: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        policies: {
            id: number;
            petId: number;
            microchipNumber: string;
            status: string;
            initialGraceDate: Date;
            renewalOfLimits: number;
            planId: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
        proceduresByPlan: {
            id: number;
            availableLimit: string;
            share: number;
            valueToAnticipate: number;
            procedureId: number;
            planId: number;
        }[];
        coverages: {
            id: number;
            planId: number;
            coverageId: number;
        }[];
    } & {
        id: number;
        name: string;
        description: string;
        value: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PlanClient<{
        policies: {
            id: number;
            petId: number;
            microchipNumber: string;
            status: string;
            initialGraceDate: Date;
            renewalOfLimits: number;
            planId: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
        proceduresByPlan: ({
            procedure: {
                id: number;
                name: string;
                description: string;
                coverageId: number;
            };
        } & {
            id: number;
            availableLimit: string;
            share: number;
            valueToAnticipate: number;
            procedureId: number;
            planId: number;
        })[];
        coverages: ({
            plan: {
                id: number;
                name: string;
                description: string;
                value: number;
                createdAt: Date;
                updatedAt: Date;
            };
            coverage: {
                procedures: {
                    id: number;
                    name: string;
                    description: string;
                    coverageId: number;
                }[];
            } & {
                id: number;
                name: string;
            };
        } & {
            id: number;
            planId: number;
            coverageId: number;
        })[];
    } & {
        id: number;
        name: string;
        description: string;
        value: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updatePlanInput: UpdatePlanInput): string;
    remove(id: number): string;
}
