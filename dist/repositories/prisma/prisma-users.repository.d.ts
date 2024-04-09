import { PrismaService } from "src/prisma.service";
import { UsersRepository } from "../users.repository";
export declare class PrismaUsersRepository implements UsersRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        email: string;
        password: string;
        accountId: number;
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
    update(id: any, name: string, email: string, password: string): Promise<void>;
}
