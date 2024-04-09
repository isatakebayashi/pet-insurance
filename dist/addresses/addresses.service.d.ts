import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { PrismaService } from 'src/prisma.service';
export declare class AddressesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createAddressInput: CreateAddressInput): import(".prisma/client").Prisma.Prisma__AddressClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AddressClient<{
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
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateAddressInput: UpdateAddressInput): import(".prisma/client").Prisma.Prisma__AddressClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Promise<{
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
    }>;
}
