import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { Prisma } from '@prisma/client';
export declare class UsersService {
    private prismaService;
    private readonly logger;
    constructor(prismaService: PrismaService);
    create(createUserInput: CreateUserInput): Prisma.Prisma__UserClient<{
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
    findAll(): Prisma.PrismaPromise<({
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
    findOne(id: number): Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        password: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findByEmail(email: string): Prisma.Prisma__UserClient<{
        addresses: {
            id: number;
            street: string;
            number: string;
            complement: string;
            neighborhood: string;
            zipcode: string;
            city: string;
            state: string;
            addressType: string;
            userId: number;
            updatedAt: Date;
            createdAt: Date;
        }[];
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
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateUserInput: UpdateUserInput): Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        email: string;
        password: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        accountId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
