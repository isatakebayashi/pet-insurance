import { PrismaService } from "src/prisma.service";
import { AccountsRepository } from "../accounts.repository";
import { Account } from "@prisma/client";
export declare class PrismaAccountsRepository implements AccountsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(name: string): Promise<Account>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: any): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        password: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
