import { AccountsService } from './accounts.service';
import { Account } from './entities/account.entity';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
export declare class AccountsResolver {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
    createAccount(createAccountInput: CreateAccountInput): import(".prisma/client").Prisma.Prisma__AccountClient<{
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
    updateAccount(updateAccountInput: UpdateAccountInput): import(".prisma/client").Prisma.Prisma__AccountClient<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removeAccount(id: number): Promise<Account>;
}
