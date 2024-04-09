import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserInput: CreateUserInput): import(".prisma/client").Prisma.Prisma__UserClient<{
        pets: {
            id: number;
            type: string;
            name: string;
            breed: string;
            birthDate: Date;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        name: string;
        email: string;
        password: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        pets: {
            id: number;
            type: string;
            name: string;
            breed: string;
            birthDate: Date;
            userId: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        name: string;
        email: string;
        password: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        password: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    updateUser(updateUserInput: UpdateUserInput): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        password: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removeUser(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
