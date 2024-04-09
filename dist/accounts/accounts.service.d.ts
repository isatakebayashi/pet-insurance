import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { PrismaService } from 'src/prisma.service';
export declare class AccountsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createAccountInput: CreateAccountInput): import(".prisma/client").Prisma.Prisma__AccountClient<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        users: {
            id: number;
            name: string;
            email: string;
            password: string;
            accountId: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AccountClient<{
        users: {
            id: number;
            name: string;
            email: string;
            password: string;
            accountId: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateAccountInput: UpdateAccountInput): import(".prisma/client").Prisma.Prisma__AccountClient<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
