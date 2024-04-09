import { PrismaService } from 'src/prisma.service';
export declare class AccountResolver {
    private prismaService;
    constructor(prismaService: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
    }[]>;
}
